import Head from 'next/head'
import {MainLayout} from "../../components/MainLayout/MainLayout";
import {Layout} from "../../components/Layout/Layout";
import {ProfileData} from "../../components/ProfileData/ProfileData";
import {useState} from "react";
import {EditProfileData} from "../../components/EditPfofileData/EditProfileData";

export const Profile = () => {

    const [edit, setEdit] = useState(true)

    const editHandle = () => {
        setEdit(!edit)
    }

    return (
        <MainLayout>
            <Layout editHandle={editHandle} editMode={edit}>
                <Head>
                    <title>{'🤡💩😲'}</title>
                </Head>
                {!edit ?  <ProfileData/> : <EditProfileData />}
            </Layout>

        </MainLayout>
    )

}
export default Profile;