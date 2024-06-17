"use client";

import { doLogout } from "@/actions/logout";
import { Button } from "@/components/ui/button";

const Logout = () => {
  return (
    <form
      action={async () => {
        await doLogout();
      }}
    >
      <Button className="bg-gray-400 hover:bg-gray-600">Logout</Button>
    </form>
  );
};
export default Logout;
