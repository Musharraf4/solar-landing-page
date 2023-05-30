import Image from "next/image";
import React from "react";

export const UserCard = (props: any) => {
  const { userImage, userName, userData } = props;
  return (
    <div className="card border-0 col-lg-4 col-md-6 col-sm-12 text-center position-relative mt-md-5">
      <Image
        src={userImage}
        alt={`user-${userImage}`}
        className="m-auto position-absolute top-0 start-50 translate-middle"
        width={180}
      />
      <div className="light-background pt-5 pb-2 rounded-1" style={{ height: "300px" }}>
        <div className="pt-5 px-1">
          <h3 className="text-center heading-1 primary-text-color">{userName}</h3>
          <p className="secondary-text-color primary-text">{userData}</p>
        </div>
      </div>
    </div>
  );
};
