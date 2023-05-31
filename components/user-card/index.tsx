import Image from "next/image";

export const UserCard = (props: any) => {
  const { userImage, userName, userData } = props;
  return (
    <div
      className="card border-0 col-lg-4 col-md-6 col-sm-12 text-center position-relative "
      key={userName}
    >
      <Image
        src={userImage}
        alt={`user-${userImage}`}
        className="m-auto "
        width={180}
        style={{ zIndex: 100 }}
      />
      <div
        className="light-background pb-2 rounded-1"
        style={{ height: "300px", marginTop: "-80px" }}
      >
        <div className=" px-1" style={{ paddingTop: "100px" }}>
          <h3 className="text-center heading-1 primary-text-color">{userName}</h3>
          <p className="secondary-text-color primary-text">{userData}</p>
        </div>
      </div>
    </div>
  );
};
