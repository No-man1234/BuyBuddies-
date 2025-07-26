import { useQuery } from "@tanstack/react-query";
import React from 'react';

const useUsers = () => {
  const {
    isPending,
    data: users = [],
    refetch,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await fetch("http://localhost/BuyBuddiesBackend/api/index.php/users");
      return res.json();
    },
  });
  return [users,refetch, isPending];
};


export default useUsers;