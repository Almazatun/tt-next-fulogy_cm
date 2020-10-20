import React, {useState} from "react";
import {Layout} from "../../components/Layout/Layout";
import {Profile} from "../../components/Profile/Profile";
import {ProfileContainer} from "../../components/Profile/ProfileContainer";
import {EditProfileContainer} from "../../components/EditPfofile/EditProfileContainer";

export const Main = () => {

    const [edit, setEdit] = useState(false)

    const editHandle = () => {
        setEdit(!edit)
    }

    return (
            <Layout editHandle={editHandle} editMode={edit}>
                {!edit ?  <ProfileContainer /> : <EditProfileContainer />}
            </Layout>
    )

}
export default Profile;