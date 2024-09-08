import Link from 'next/link';

export default function Navigation() {
  return (
    <nav>
      <ul className="flex justify-center items-center gap-4 text-xl font-bold fixed top-4 left-1/2 transform -translate-x-1/2 py-2 px-6 transition-all duration-300 ease-in-out z-50 rounded-full" style={{ backgroundColor: 'rgba(255, 255, 255, var(--nav-opacity, 0.8))', backdropFilter: 'blur(5px)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 2px 4px' }}>
        <li><Link href="/">首页</Link></li>
        <li><Link href="/post">文章</Link></li>
        <li><Link href="/archive">归档</Link></li>
        <li><Link href="/about">关于</Link></li>
      </ul>
    </nav>
  );
}
