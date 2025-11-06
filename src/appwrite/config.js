import conf from "../conf"
import { Client, Databases, Storage, ID } from "appwrite";

export class Servie {
    Client = new Client();
    databases;
    bucket;

    constructor() {
        this.Client
            .setEndpoint(conf.appWriteUrl)
            .setProject(conf.appWriteProjectId)
        this.databases = new Databases(this.Client)
        this.bucket = new Storage(this.Client)
    }

    async createPost({ title, slug, content, featuredImage, status, userId }) {
        try {
            return await this.databases.createDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                { title, content, featuredImage, status, userId }
            )
        } catch (error) {
            console.log("Appwrite service :: createPost :: error", error)
        }
    }

    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
                { title, content, featuredImage, status }
            )
        } catch (error) {
            console.log("Appwrite service :: updatePost :: error", error)
        }
    }

    async deletePost({ slug }) {
        try {
            await this.databases.deleteDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deletePost :: error", error)
            return false
        }

    }

    async getPost({ slug }) {
        try {
            return await this.databases.getDocument(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                slug,
            )
        } catch (error) {
            console.log("Appwrite service :: getPost :: error", error)
            return false
        }
    }

    async getPosts(queries = [Query.equal("status", "Active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appWriteDataBaseId,
                conf.appWriteCollectionId,
                queries
            )
        } catch (error) {
            console.log("Appwrite service :: getPosts :: error", error)
            return false
        }
    }


    // File Upload Service

    async uploadFile(File) {
        try {
            return await this.bucket.createFile(
                conf.appWriteBucketId,
                ID.unique(),
                File
            )
        } catch (error) {
            console.log("Appwrite service :: UploadFile :: error", error)
            return false
        }
    }


    async deleteFile(FileId) {
        try {
            await this.bucket.deleteFile(
                conf.appWriteBucketId,
                FileId
            )
            return true
        } catch (error) {
            console.log("Appwrite service :: deleteFile :: error", error)
            return false
        }
    }

    getFilePreview(FileId) {
        return this.bucket.getFilePreview(
            conf.appWriteBucketId,
            FileId
        )
    }

}

const service = new Servie();

export default service