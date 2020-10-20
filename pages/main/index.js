import {Layout} from "../../components/Layout/Layout";
import {Profile} from "../../components/Profile/Profile";
import {useState} from "react";
import {EditProfile} from "../../components/EditPfofile/EditProfile";

export const Main = () => {

    const [edit, setEdit] = useState(false)

    const editHandle = () => {
        setEdit(!edit)
    }

    return (
            <Layout editHandle={editHandle} editMode={edit}>
                {!edit ?  <Profile/> : <EditProfile />}
            </Layout>
    )

}
export default Profile;