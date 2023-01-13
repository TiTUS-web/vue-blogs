import firebase from 'firebase/app';

enum MutationTypes {
    getProfile = '[auth] getProfile',
    getProfileInitials = '[auth] getProfileInitials', 
    updateUser = '[auth] updateUser', 
}

enum ActionTypes {
    getCurrentUser = '[auth] getCurrentUser'
}

type oProfile = { 
    email: string,
    firstName: string,
    lastName: string,
    username: string,
    id?: number | null,
    initials?: string,
};

type AuthState = {
    arPosts: [],
    editPost: object,
    oUser: object, 
    oProfile: oProfile,
}

type AuthDoc = {
    id: any,
    data: () => { 
        (): any,
        new(): any, 
        email: string, 
        firstName: string, 
        lastName: string, 
        username: string, 
    } 
}

type AuthContext = { 
    commit: (arg0: string, arg1?: firebase.firestore.DocumentSnapshot<firebase.firestore.DocumentData> | undefined) => void; 
}

export {MutationTypes, ActionTypes, oProfile, AuthState, AuthDoc, AuthContext};