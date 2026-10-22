'use client';
import AdminGuard from '@/components/AdminGuard';
import { useAuth } from '@/lib/auth-context';
import { Activity, FileText, FolderGit2, LogOut, Plus, Settings } from 'lucide-react';
import Link from 'next/link';

export default function Dashboard() {
  const { logout } = useAuth();

  return (
    <AdminGuard>
      <div className="min-h-screen w-full bg-background relative z-20">
        {/* Admin Header */}
        <header className="border-b border-border bg-surface px-8 py-4 flex justify-between items-center sticky top-0 z-50">
          <div className="flex items-center gap-4">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
            <span className="font-mono text-sm text-muted">ADMIN_CONSOLE_V2</span>
          </div>
          <button 
            onClick={() => logout()}
            className="text-xs font-mono text-red-400 hover:text-red-300 flex items-center gap-2 border border-red-900/50 px-3 py-1 bg-red-900/10"
          >
            <LogOut className="w-3 h-3" /> TERMINATE SESSION
          </button>
        </header>

        <main className="p-8 max-w-7xl mx-auto">
          {/* Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="bg-surface border border-border p-6 relative group hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <FolderGit2 className="text-accent w-6 h-6" />
                <span className="text-xs font-mono text-muted">PROJECTS</span>
              </div>
              <div className="text-3xl font-bold text-foreground">5</div>
              <div className="text-xs text-muted mt-2">Active Aetheron programs</div>
            </div>

            <div className="bg-surface border border-border p-6 relative group hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <FileText className="text-accent w-6 h-6" />
                <span className="text-xs font-mono text-muted">BLOG POSTS</span>
              </div>
              <div className="text-3xl font-bold text-foreground">1</div>
              <div className="text-xs text-muted mt-2">Published research entry</div>
            </div>

            <div className="bg-surface border border-border p-6 relative group hover:border-accent/50 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <Activity className="text-accent w-6 h-6" />
                <span className="text-xs font-mono text-muted">SYSTEM HEALTH</span>
              </div>
              <div className="text-3xl font-bold text-green-400">LIVE</div>
              <div className="text-xs text-muted mt-2">Static portfolio build verified</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Project Management */}
            <div className="border border-border bg-black/20 p-8">
              <h3 className="font-mono text-accent text-sm mb-6 flex items-center gap-2">
                <FolderGit2 className="w-4 h-4" /> MANAGE PROJECTS
              </h3>
              <div className="space-y-3">
                <Link href="/admin/projects/new" className="block w-full text-left p-4 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group">
                  <div className="flex items-center gap-3 text-muted group-hover:text-foreground">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-mono">INITIALIZE NEW PROJECT</span>
                  </div>
                </Link>
                <div className="p-4 bg-surface border border-border flex justify-between items-center text-sm">
                  <span>Novexa · 18-DOF Hexapod</span>
                  <span className="text-xs font-mono text-green-400">PUBLISHED</span>
                </div>
              </div>
            </div>

            {/* Content Management */}
            <div className="border border-border bg-black/20 p-8">
              <h3 className="font-mono text-accent text-sm mb-6 flex items-center gap-2">
                 <FileText className="w-4 h-4" /> TRANSMISSIONS (BLOG)
              </h3>
              <div className="space-y-3">
                <Link href="/admin/blog/new" className="block w-full text-left p-4 border border-dashed border-border hover:border-accent hover:bg-accent/5 transition-all group">
                  <div className="flex items-center gap-3 text-muted group-hover:text-foreground">
                    <Plus className="w-4 h-4" />
                    <span className="text-sm font-mono">COMPOSE NEW ENTRY</span>
                  </div>
                </Link>
                <div className="p-4 bg-surface border border-border flex justify-between items-center text-sm">
                  <span>Fabrication of a 3D Printed Hexapod</span>
                  <span className="text-xs font-mono text-green-400">PUBLISHED</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </AdminGuard>
  );
}
