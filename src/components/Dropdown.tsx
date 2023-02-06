import React from 'react' 

const dropdownLinks = [
    {
      name: "自分の記録",
      path: "#",
    },
    {
      name: "体重グラフ",
      path: "#",
    },
    {
      name: "目標",
      path: "#",
    },
    {
      name: "選択中のコース",
      path: "#",
    },
    {
      name: "コラム一覧",
      path: "#",
    },
    {
      name: "設定",
      path: "#",
    },
  ];
const Dropdown = () => {
  return (<ul className="">
    {dropdownLinks.map((link, index) => {
      return (
        <li key={index}><a href={link.path} className="bg-gray rounded-none border-y border-t-white/20 border-b-dark-500/20 hover:bg-dark-500/20 pl-10 p-5 block h-auto font-medium text-white">{link.name}</a></li>
      );
    })}
  </ul>
  )
}

export default Dropdown