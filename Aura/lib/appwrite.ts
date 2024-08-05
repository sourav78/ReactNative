import { loginSchema, registerSchema } from '@/constants/schema';
import { Account, Avatars, Client, Databases, ID } from 'react-native-appwrite';

export const appwriteConfig = {
    endpoint: "https://cloud.appwrite.io/v1",
    platform: "com.native.aura",
    projectId: "66b03c890019f149c489",
    databaseId: "66b0407a00251691b438",
    userCollectionId: "66b040e60039fed6761f",
    videoCollectionId: "66b0412200176bcae31c",
    storageId: "66b044f60038ec907664",
}

// Init your React Native SDK
const client = new Client();

client
    .setEndpoint(appwriteConfig.endpoint) // Your Appwrite Endpoint
    .setProject(appwriteConfig.projectId) // Your project ID
    .setPlatform(appwriteConfig.platform) // Your application ID or bundle ID.
;

const account = new Account(client);
const avatars = new Avatars(client)
const database = new Databases(client)

// Register User

export const createUser = async (userInfo: registerSchema) => {
    try{
        const newUser = await account.create(
            ID.unique(),
            userInfo.email,
            userInfo.password,
            userInfo.username
        )

        if(!newUser) throw Error;

        const avatarUrl = avatars.getInitials(userInfo.username)

        await signIn({email: userInfo.email, password: userInfo.password})

        const newUserDB = await database.createDocument(
            appwriteConfig.databaseId, 
            appwriteConfig.userCollectionId,
            ID.unique(),
            {
                accountId: newUser.$id,
                email: newUser.email,
                username: userInfo.username,
                avatar: avatarUrl
            }
        )

        return newUserDB
    }catch(error){
        console.log(error);
        throw new Error(error as string)
    }
}

export const signIn = async (signinInfo:loginSchema) => {
    try{
        const session = await account.createEmailPasswordSession(signinInfo.email, signinInfo.password)

        return session
    }catch(error){
        throw new Error(error as string)
    }
}

export const deleteSession = async () => {
    const result = await account.deleteSessions();
    console.log("session deleted");
    
}