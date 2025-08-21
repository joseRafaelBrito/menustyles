import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { 
  MoreHorizontal, 
  Copy, 
  Clipboard, 
  Trash2, 
  Edit, 
  Share2, 
  ChevronDown, 
  Menu,
  Home,
  Settings,
  User,
  LogOut,
  ChevronRight,
  Search,
  Heart,
  Star,
  Download,
  Info
} from "lucide-react";

interface CursorMenuShowcaseProps {
  onOpenModal: (modalType: string) => void;
}

// Custom cursor component
const CustomCursor = ({ x, y, visible }: { x: number; y: number; visible: boolean }) => (
  <div 
    className={`fixed pointer-events-none z-50 transition-opacity duration-200 ${
      visible ? 'opacity-100' : 'opacity-0'
    }`}
    style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
  >
    <div className="w-4 h-4 bg-brand-red rounded-full border-2 border-white shadow-lg"></div>
  </div>
);

// Contextual Popover Menu
const ContextualPopover = ({ x, y, onClose, visible }: { x: number; y: number; onClose: () => void; visible: boolean }) => {
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (visible) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div 
      ref={menuRef}
      className="fixed z-50 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 min-w-[160px] animate-in fade-in-0 zoom-in-95 duration-200"
      style={{ left: x, top: y }}
      role="menu"
      aria-label="Context menu"
    >
      {[
        { icon: Copy, label: 'Copy', shortcut: 'Ctrl+C' },
        { icon: Clipboard, label: 'Paste', shortcut: 'Ctrl+V' },
        { icon: Edit, label: 'Edit', shortcut: 'F2' },
        { icon: Share2, label: 'Share', shortcut: '' },
        { icon: Trash2, label: 'Delete', shortcut: 'Del' },
      ].map((item, index) => (
        <button
          key={index}
          role="menuitem"
          className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
          onClick={onClose}
        >
          <item.icon className="w-4 h-4 mr-3" />
          <span className="flex-1 text-left">{item.label}</span>
          {item.shortcut && (
            <span className="text-xs text-gray-500 dark:text-gray-400">{item.shortcut}</span>
          )}
        </button>
      ))}
    </div>
  );
};

// Mac-style Pop-up Control
const MacPopupControl = ({ isOpen, onToggle }: { isOpen: boolean; onToggle: () => void }) => {
  const options = [
    'Margherita Pizza',
    'Pepperoni Pizza',
    'Veggie Supreme',
    'Meat Lovers',
    'Hawaiian',
    'BBQ Chicken'
  ];
  const [selected, setSelected] = useState(0);

  return (
    <div className="relative">
      <Button
        onClick={onToggle}
        variant="outline"
        className="w-48 justify-between text-left"
        aria-expanded={isOpen}
      >
        <span>{options[selected]}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </Button>
      
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-1 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-gray-700 py-2 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200">
          {options.map((option, index) => (
            <button
              key={index}
              role="menuitem"
              className="w-full flex items-center px-4 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              onClick={() => {
                setSelected(index);
                onToggle();
              }}
            >
              <span className="flex-1 text-left">{option}</span>
              {index === selected && (
                <span className="text-brand-red">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

// Radial (Pie) Menu
const RadialMenu = ({ x, y, visible, onClose }: { x: number; y: number; visible: boolean; onClose: () => void }) => {
  const actions = [
    { icon: '📝', label: 'Edit', angle: 0 },
    { icon: '📤', label: 'Share', angle: 60 },
    { icon: '❤️', label: 'Like', angle: 120 },
    { icon: '🔍', label: 'Search', angle: 180 },
    { icon: '⭐', label: 'Favorite', angle: 240 },
    { icon: '📥', label: 'Download', angle: 300 }
  ];

  if (!visible) return null;

  return (
    <div 
      className="fixed z-50 animate-in fade-in-0 zoom-in-95 duration-300"
      style={{ left: x, top: y, transform: 'translate(-50%, -50%)' }}
    >
      <div className="relative w-32 h-32">
        <div className="absolute inset-0 bg-white dark:bg-gray-800 rounded-full shadow-xl border border-gray-200 dark:border-gray-700"></div>
        {actions.map((action, index) => {
          const radius = 60;
          const angleRad = (action.angle * Math.PI) / 180;
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;
          
          return (
            <button
              key={index}
              className="absolute w-10 h-10 bg-brand-red rounded-full flex items-center justify-center text-white shadow-lg hover:scale-110 transition-transform duration-200"
              style={{
                left: `50%`,
                top: `50%`,
                transform: `translate(${x - 20}px, ${y - 20}px)`,
                animationDelay: `${index * 50}ms`
              }}
              onClick={onClose}
              title={action.label}
            >
              <span className="text-sm">{action.icon}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
};

// Side-panel Drawer
const SideDrawer = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 animate-in fade-in-0 duration-300" onClick={onClose}></div>
      <div className="absolute right-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl animate-in slide-in-from-right duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Menu Panel</h3>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              ×
            </button>
          </div>
          <nav className="space-y-4">
            {[
              { icon: Home, label: 'Home' },
              { icon: Search, label: 'Search' },
              { icon: Heart, label: 'Favorites' },
              { icon: User, label: 'Profile' },
              { icon: Settings, label: 'Settings' },
              { icon: LogOut, label: 'Logout' }
            ].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                onClick={onClose}
              >
                <item.icon className="w-5 h-5 mr-3" />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

// Multi-level Hamburger Menu
const MultiLevelMenu = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  const [currentLevel, setCurrentLevel] = useState(0);
  const [breadcrumb, setBreadcrumb] = useState<string[]>(['Main Menu']);

  const menuLevels = [
    [
      { label: 'Appetizers', hasSubmenu: true },
      { label: 'Main Courses', hasSubmenu: true },
      { label: 'Desserts', hasSubmenu: true },
      { label: 'Beverages', hasSubmenu: true }
    ],
    [
      { label: 'Bruschetta', hasSubmenu: false },
      { label: 'Caesar Salad', hasSubmenu: false },
      { label: 'Calamari', hasSubmenu: false },
      { label: 'Cheese Platter', hasSubmenu: false }
    ]
  ];

  const goToSubmenu = (label: string) => {
    setCurrentLevel(1);
    setBreadcrumb(['Main Menu', label]);
  };

  const goBack = () => {
    setCurrentLevel(0);
    setBreadcrumb(['Main Menu']);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black bg-opacity-50 animate-in fade-in-0 duration-300" onClick={onClose}></div>
      <div className="absolute left-0 top-0 h-full w-80 bg-white dark:bg-gray-800 shadow-xl animate-in slide-in-from-left duration-300">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              {currentLevel > 0 && (
                <button onClick={goBack} className="text-brand-red hover:text-red-600">
                  ←
                </button>
              )}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                {breadcrumb[breadcrumb.length - 1]}
              </h3>
            </div>
            <button onClick={onClose} className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200">
              ×
            </button>
          </div>
          
          <nav className="space-y-2">
            {menuLevels[currentLevel].map((item, index) => (
              <button
                key={index}
                className="w-full flex items-center justify-between px-4 py-3 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
                onClick={() => item.hasSubmenu ? goToSubmenu(item.label) : onClose()}
              >
                <span>{item.label}</span>
                {item.hasSubmenu && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default function CursorMenuShowcase({ onOpenModal }: CursorMenuShowcaseProps) {
  const [cursor, setCursor] = useState({ x: 0, y: 0, visible: false });
  const [contextMenu, setContextMenu] = useState({ x: 0, y: 0, visible: false });
  const [macPopup, setMacPopup] = useState(false);
  const [radialMenu, setRadialMenu] = useState({ x: 0, y: 0, visible: false });
  const [sideDrawer, setSideDrawer] = useState(false);
  const [multiLevelMenu, setMultiLevelMenu] = useState(false);

  // Digital Menus Optimized for SEO – designed to boost your restaurant's visibility, attract more customers, and create a seamless ordering experience. - style menu layouts
  const digitalMenuStyles = [
    {
      id: 'photo',
      title: 'Full-Screen Photo Menu',
      description: 'High-quality dish photography with detailed descriptions - perfect for upscale restaurants',
      bestFor: 'Fine Dining',
      image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400',
      component: (
        <Button 
          onClick={() => onOpenModal('photo')}
          className="w-full bg-brand-red hover:bg-red-600 text-white group h-12"
        >
          <Star className="w-4 h-4 mr-2 group-hover:animate-pulse" />
          View Photo Menu
        </Button>
      )
    },
    {
      id: 'grid',
      title: 'Grid Menu with Icons',
      description: 'Clean, organized layout with visual icons - ideal for cafes and quick-service restaurants',
      bestFor: 'Cafes & QSR',
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      component: (
        <Button 
          onClick={() => onOpenModal('grid')}
          className="w-full bg-brand-red hover:bg-red-600 text-white group h-12"
        >
          <Info className="w-4 h-4 mr-2 group-hover:rotate-12 transition-transform" />
          View Grid Menu
        </Button>
      )
    },
    {
      id: 'tabbed',
      title: 'Tabbed Menu Categories',
      description: 'Organized by categories: appetizers, mains, drinks, desserts - perfect for full-service restaurants',
      bestFor: 'Full-Service',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      component: (
        <Button 
          onClick={() => onOpenModal('tabbed')}
          className="w-full bg-brand-red hover:bg-red-600 text-white group h-12"
        >
          <Menu className="w-4 h-4 mr-2 group-hover:scale-110 transition-transform" />
          View Tabbed Menu
        </Button>
      )
    },
    {
      id: 'carousel',
      title: 'Carousel Menu Slider',
      description: 'Interactive slider format optimized for mobile browsing and touch navigation',
      bestFor: 'Mobile-First',
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      component: (
        <Button 
          onClick={() => onOpenModal('carousel')}
          className="w-full bg-brand-red hover:bg-red-600 text-white group h-12"
        >
          <Download className="w-4 h-4 mr-2 group-hover:translate-x-1 transition-transform" />
          View Carousel Menu
        </Button>
      )
    },
    {
      id: 'qr',
      title: 'QR Code Menu',
      description: 'Contactless ordering with QR codes - perfect for post-pandemic dining and quick service',
      bestFor: 'Contactless',
      image: 'https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=600&h=400',
      component: (
        <Button 
          onClick={() => onOpenModal('qr')}
          className="w-full bg-brand-red hover:bg-red-600 text-white group h-12"
        >
          <Search className="w-4 h-4 mr-2 group-hover:rotate-90 transition-transform" />
          View QR Menu
        </Button>
      )
    }
  ];

  // Interactive menu patterns
  const interactivePatterns = [
    {
      id: 'contextual',
      title: 'Contextual Popover',
      description: 'Right-click to open contextual menu with common actions',
      interaction: 'Right-click',
      component: (
        <div 
          className="w-full h-32 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-lg border-2 border-dashed border-blue-300 dark:border-blue-700 flex items-center justify-center cursor-pointer hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-200"
          onContextMenu={(e) => {
            e.preventDefault();
            setContextMenu({ x: e.clientX, y: e.clientY, visible: true });
          }}
        >
          <span className="text-blue-600 dark:text-blue-400 font-medium">Right-click here</span>
        </div>
      )
    },
    {
      id: 'mac-popup',
      title: 'Mac-style Pop-up Control',
      description: 'Single-choice dropdown with current selection marked',
      interaction: 'Click',
      component: (
        <div className="flex items-center justify-center h-32">
          <MacPopupControl isOpen={macPopup} onToggle={() => setMacPopup(!macPopup)} />
        </div>
      )
    },
    {
      id: 'radial',
      title: 'Radial (Pie) Menu',
      description: 'Circular menu layout for quick gesture-based actions',
      interaction: 'Right-click',
      component: (
        <div 
          className="w-full h-32 bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-lg border-2 border-dashed border-purple-300 dark:border-purple-700 flex items-center justify-center cursor-pointer hover:from-purple-100 hover:to-purple-200 dark:hover:from-purple-800 dark:hover:to-purple-700 transition-all duration-200"
          onContextMenu={(e) => {
            e.preventDefault();
            setRadialMenu({ x: e.clientX, y: e.clientY, visible: true });
          }}
        >
          <span className="text-purple-600 dark:text-purple-400 font-medium">Right-click for radial menu</span>
        </div>
      )
    },
    {
      id: 'side-drawer',
      title: 'Side-panel Drawer',
      description: 'Slide-in navigation panel from the side',
      interaction: 'Click',
      component: (
        <div className="flex items-center justify-center h-32">
          <Button 
            onClick={() => setSideDrawer(true)}
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            <Menu className="w-4 h-4 mr-2" />
            Open Side Panel
          </Button>
        </div>
      )
    },
    {
      id: 'multi-level',
      title: 'Multi-level Hamburger Menu',
      description: 'Nested menu system with breadcrumb navigation',
      interaction: 'Click',
      component: (
        <div className="flex items-center justify-center h-32">
          <Button 
            onClick={() => setMultiLevelMenu(true)}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            <Menu className="w-4 h-4 mr-2" />
            Multi-level Menu
          </Button>
        </div>
      )
    }
  ];

  // Mouse tracking for custom cursor
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursor({ x: e.clientX, y: e.clientY, visible: true });
    };

    const handleMouseLeave = () => {
      setCursor(prev => ({ ...prev, visible: false }));
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return (
    <section id="demos" className="py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 animate-in fade-in-0 slide-in-from-top-4 duration-700">
            Complete Menu Showcase
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto animate-in fade-in-0 slide-in-from-top-6 duration-700 delay-200">
            Discover all available digital menu styles - from traditional Digital Menus Optimized for SEO – designed to boost your restaurant's visibility, attract more customers, and create a seamless ordering experience. layouts to advanced interactive patterns with microanimations.
          </p>
        </div>

        {/* Digital Menus Optimized for SEO – designed to boost your restaurant's visibility, attract more customers, and create a seamless ordering experience. - Style Traditional Layouts */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in-0 slide-in-from-left-4 duration-700">
              Digital Menus Optimized for SEO – designed to boost your restaurant's visibility, attract more customers, and create a seamless ordering experience.
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Professional menu layouts used by over 10,000 restaurants worldwide. Each style is optimized for different restaurant types and customer experiences.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {digitalMenuStyles.map((style, index) => (
              <div 
                key={style.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-in fade-in-0 slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <img 
                  src={style.image} 
                  alt={style.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" 
                />
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                      {style.title}
                    </h4>
                    <span className="text-xs bg-brand-red text-white px-2 py-1 rounded-full">
                      {style.bestFor}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    {style.description}
                  </p>
                  {style.component}
                </div>
                <div className="h-1 bg-gradient-to-r from-brand-red to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Interactive Menu Patterns */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 animate-in fade-in-0 slide-in-from-right-4 duration-700">
              Interactive Menu Patterns
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Advanced interaction patterns with custom cursor tracking, gesture controls, and microanimations for next-generation user experiences.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {interactivePatterns.map((pattern, index) => (
              <div 
                key={pattern.id} 
                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group animate-in fade-in-0 slide-in-from-bottom-8 duration-700"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-xl font-semibold text-gray-900 dark:text-white group-hover:text-brand-red transition-colors">
                      {pattern.title}
                    </h4>
                    <span className="text-xs bg-purple-600 text-white px-2 py-1 rounded-full">
                      {pattern.interaction}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 text-sm">
                    {pattern.description}
                  </p>
                  <div className="mb-4">
                    {pattern.component}
                  </div>
                </div>
                <div className="h-1 bg-gradient-to-r from-purple-600 to-purple-800 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Cursor */}
      <CustomCursor x={cursor.x} y={cursor.y} visible={cursor.visible} />
      
      {/* Menu Components */}
      <ContextualPopover 
        x={contextMenu.x} 
        y={contextMenu.y} 
        visible={contextMenu.visible}
        onClose={() => setContextMenu(prev => ({ ...prev, visible: false }))}
      />
      
      <RadialMenu 
        x={radialMenu.x} 
        y={radialMenu.y} 
        visible={radialMenu.visible}
        onClose={() => setRadialMenu(prev => ({ ...prev, visible: false }))}
      />
      
      <SideDrawer 
        isOpen={sideDrawer} 
        onClose={() => setSideDrawer(false)} 
      />
      
      <MultiLevelMenu 
        isOpen={multiLevelMenu} 
        onClose={() => setMultiLevelMenu(false)} 
      />
    </section>
  );
}