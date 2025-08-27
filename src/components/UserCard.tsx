import { Building, Globe, MapPin, Phone, Users } from "lucide-react";

import UserDetail from "./UserDetail";
import type { User } from "../types";

interface Props {
  user: User;
}

const UserCard = ({ user }: Props) => (
  <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow border border-gray-100 overflow-hidden">
    <div className="p-6">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">
            {user.name}
          </h3>
          <p className="text-gray-600 text-sm">@{user.username}</p>
        </div>
        <div className="h-12 w-12 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
          <span className="text-white font-semibold text-lg">
            {user.name.charAt(0)}
          </span>
        </div>
      </div>

      <div className="space-y-3">
        <UserDetail icon={Users} text={user.email} />
        <UserDetail icon={MapPin} text={user.address?.city || "N/A"} />
        <UserDetail icon={Building} text={user.company?.name || "N/A"} />
        <UserDetail icon={Phone} text={user.phone} />
        <UserDetail
          icon={Globe}
          text={user.website}
          isLink={true}
          href={`http://${user.website}`}
        />
      </div>

      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 italic">
          "{user.company?.catchPhrase || "No company motto available"}"
        </p>
      </div>
    </div>
  </div>
);

export default UserCard;
