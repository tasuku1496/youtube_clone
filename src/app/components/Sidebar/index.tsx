import { FaHome, FaHistory, FaUser, FaYoutube, FaStar } from "react-icons/fa";

export default function Sidebar() {
  const categories = [
    { name: "ホーム", icon: <FaHome /> },
    { name: "ショート", icon: <FaYoutube /> },
    { name: "登録チャンネル", icon: <FaStar /> },
    { name: "マイページ", icon: <FaUser /> },
    { name: "履歴", icon: <FaHistory /> },
  ];

  return (
    <aside className="hidden md:block w-30 bg-white shadow h-screen p-4 pt-20">
      <ul>
        {categories.map((category) => (
          <li key={category.name} className="mb-2">
            <button className="w-full text-left py-2 px-4 hover:bg-gray-200 rounded flex items-center">
              <span className="mr-2 text-gray-500">{category.icon}</span>
              {category.name}
            </button>
          </li>
        ))}
      </ul>
    </aside>
  );
}
