import React from "react";

const Index = () => {
  React.useEffect(() => {
    window.location.replace(
      "https://emmabckstrm.notion.site/emmabckstrm/Fika-58ffb0e1679c4cfb99d3de2941532cdc"
    );
  }, []);

  return (
    <div className="h-screen w-screen bg-neutral-900 text-white flex flex-col justify-center">
      <p className="text-center">loading ...</p>
    </div>
  );
};

export default Index;
