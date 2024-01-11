import { getCurrentUser } from "@/actions/getCurrentUser";
import Avatar from "../components/Avatar";
import Container from "../components/Container";
import Heading from "../components/Heading";

const Profile = async () => {
  const currentUser = await getCurrentUser();
  return (
    <div>
      <Container>
        <div className="mb-4 mt-8">
          <Heading title="Profile Page" center />
        </div>
        <div className="flex flex-col items-center justify-center">
          <Avatar src={currentUser?.image} />
          <div className="">{currentUser?.name}</div>
          <div className="">{currentUser?.email}</div>
        </div>
      </Container>
    </div>
  );
};

export default Profile;
