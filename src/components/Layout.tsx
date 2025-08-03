import { ReactNode } from 'react';
import Sidebar from '@/features/sidebar/Sidebar';

interface LayoutProps {
    children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
    return (
        <div className="flex h-screen bg-black text-white overflow-hidden">
            <Sidebar />
            <main className="flex-1 relative left-20 overflow-y-auto px-2 py-6">
                {children}
            </main>
        </div>
    );
};

export default Layout;
