interface Props {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  text: string;
  isLink?: boolean;
  href?: string;
}

const UserDetail = ({ icon: Icon, text, isLink = false, href }: Props) => (
  <div className="flex items-center gap-3 text-gray-600">
    <div className="bg-gray-100 p-1 rounded">
      <Icon className="h-4 w-4" />
    </div>
    {isLink && href ? (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="text-sm text-indigo-600 hover:text-indigo-800 truncate transition-colors"
      >
        {text}
      </a>
    ) : (
      <span className="text-sm truncate">{text}</span>
    )}
  </div>
);

export default UserDetail;
