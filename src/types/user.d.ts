interface UserProps {
  id: string;
  name: string;
  email: string[];
  phone: string;
  isScheduled: boolean;
}

type UserList = UserProps[];

export { UserProps, UserList };
