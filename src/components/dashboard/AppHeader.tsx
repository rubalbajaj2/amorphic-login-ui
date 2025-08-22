import { useState } from "react";
import { ChevronDown, Search, Info, Bell, LogOut } from "lucide-react";
import { AmorphicLogo } from "../AmorphicLogo";
import { AmorphicLogoSVG } from "../AmorphicLogoSVG";
import { DiscoverMenu } from "./DiscoverMenu";
import { ExploreMenu } from "./ExploreMenu";
import { ManageMenu } from "./ManageMenu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface AppHeaderProps {
  onLogout: () => void;
}

export const AppHeader = ({ onLogout }: AppHeaderProps) => {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const toggleMenu = (menuName: string) => {
    setActiveMenu(activeMenu === menuName ? null : menuName);
  };

  const closeMenus = () => setActiveMenu(null);

  return (
    <div className="relative">
      <header className="w-full bg-card px-6 py-3 border-b border-border flex items-center justify-between">
        {/* Left Section - Navigation */}
        <div className="flex items-center gap-6">
          <AmorphicLogoSVG className="h-6" />
          
          <nav className="flex items-center gap-4">
            <button className="font-medium text-foreground hover:text-primary transition-colors">
              Home
            </button>
            <button
              onClick={() => toggleMenu('discover')}
              className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              Discover
              <ChevronDown size={16} className={`transition-transform ${activeMenu === 'discover' ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => toggleMenu('explore')}
              className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              Explore
              <ChevronDown size={16} className={`transition-transform ${activeMenu === 'explore' ? 'rotate-180' : ''}`} />
            </button>
            
            <button
              onClick={() => toggleMenu('manage')}
              className="flex items-center gap-1 font-medium text-foreground hover:text-primary transition-colors"
            >
              Manage
              <ChevronDown size={16} className={`transition-transform ${activeMenu === 'manage' ? 'rotate-180' : ''}`} />
            </button>
          </nav>
        </div>

        {/* Right Section - User & Actions */}
        <div className="flex items-center gap-4">
          {/* Action Icons */}
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Search size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Info size={20} />
          </button>
          <button className="text-muted-foreground hover:text-foreground transition-colors">
            <Bell size={20} />
          </button>

          {/* User Profile Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                <div className="w-8 h-8 bg-primary/20 text-primary rounded-full flex items-center justify-center text-sm font-medium">
                  A
                </div>
                <div className="text-left">
                  <div className="text-sm font-medium">Admin</div>
                  <div className="text-xs text-muted-foreground">SystemRole-SystemAdministrators</div>
                </div>
                <ChevronDown size={16} />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-48">
              <DropdownMenuItem onClick={onLogout} className="text-destructive focus:text-destructive">
                <LogOut size={16} className="mr-2" />
                Logout
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </header>

      {/* Dropdown Menus */}
      {activeMenu === 'discover' && <DiscoverMenu onClose={closeMenus} />}
      {activeMenu === 'explore' && <ExploreMenu onClose={closeMenus} />}
      {activeMenu === 'manage' && <ManageMenu onClose={closeMenus} />}
    </div>
  );
};