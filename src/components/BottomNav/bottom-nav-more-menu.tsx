'use client';

import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { BottomNavMoreMenuProps } from './types';
import { X, ChevronDown } from 'lucide-react';
import { useState } from 'react';

export function BottomNavMoreMenu({
  groups,
  isOpen,
  onClose,
  onItemClick
}: BottomNavMoreMenuProps) {
  const pathname = usePathname();
  const [expandedGroups, setExpandedGroups] = useState<Set<string>>(
    new Set(groups.map(g => g.id))
  );

  const handleItemClick = (href: string) => {
    onItemClick(href);
    onClose();
  };

  const toggleGroup = (groupId: string) => {
    const newExpanded = new Set(expandedGroups);
    if (newExpanded.has(groupId)) {
      newExpanded.delete(groupId);
    } else {
      newExpanded.add(groupId);
    }
    setExpandedGroups(newExpanded);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-[1000]"
          />

          {/* Bottom Sheet - Solid white background */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{
              type: 'spring',
              stiffness: 400,
              damping: 35
            }}
            className="fixed bottom-0 left-0 right-0 z-[1001] bg-white rounded-t-3xl shadow-2xl flex flex-col"
            style={{ height: '80vh' }}
          >
            {/* Header */}
            <div className="flex-shrink-0 px-6 py-4 border-b border-border/30 flex items-center justify-between">
              <h2 className="text-lg font-semibold">All Menus</h2>
              <button
                onClick={onClose}
                className="p-2 rounded-lg hover:bg-accent transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Scrollable Content */}
            <div className="flex-1 overflow-y-auto px-6 py-4">
              {groups.map((group) => {
                const GroupIcon = group.icon;
                const isExpanded = expandedGroups.has(group.id);
                const hasActiveItem = group.menus.some(
                  (item) =>
                    pathname === item.href || pathname.startsWith(item.href + '/')
                );

                return (
                  <div key={group.id} className="mb-4 border-b border-border/30 last:border-0">
                    {/* Accordion Header */}
                    <button
                      onClick={() => toggleGroup(group.id)}
                      className={cn(
                        'w-full py-3 flex items-center gap-3 transition-colors',
                        hasActiveItem && 'text-[#0b6d41]'
                      )}
                    >
                      <div
                        className={cn(
                          'p-2 rounded-lg',
                          hasActiveItem ? 'bg-[#0b6d41]/10' : 'bg-gray-100'
                        )}
                      >
                        <GroupIcon
                          className="h-4 w-4"
                          strokeWidth={hasActiveItem ? 2.5 : 2}
                        />
                      </div>
                      <span className="font-medium text-sm flex-1 text-left">
                        {group.groupLabel}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {group.menus.length}
                      </span>
                      <ChevronDown
                        className={cn(
                          'h-4 w-4 transition-transform duration-200',
                          isExpanded && 'rotate-180'
                        )}
                      />
                    </button>

                    {/* Accordion Content */}
                    <AnimatePresence>
                      {isExpanded && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{
                            type: 'spring',
                            stiffness: 500,
                            damping: 30
                          }}
                          className="overflow-hidden"
                        >
                          <div className="grid grid-cols-3 gap-2 pt-2 pb-3">
                            {group.menus.map((item, index) => {
                              const isActive =
                                pathname === item.href ||
                                pathname.startsWith(item.href + '/');
                              const Icon = item.icon;

                              return (
                                <motion.button
                                  key={item.href}
                                  initial={{ opacity: 0, scale: 0.95 }}
                                  animate={{
                                    opacity: 1,
                                    scale: 1,
                                    transition: { delay: index * 0.02 }
                                  }}
                                  whileTap={{ scale: 0.95 }}
                                  onClick={() => handleItemClick(item.href)}
                                  className={cn(
                                    'flex flex-col items-center justify-center p-3 rounded-lg',
                                    'transition-colors duration-200',
                                    isActive
                                      ? 'bg-[#0b6d41]/10 text-[#0b6d41] ring-1 ring-[#0b6d41]/20'
                                      : 'text-gray-600 bg-gray-50 hover:bg-gray-100'
                                  )}
                                >
                                  <Icon
                                    className="h-5 w-5 mb-1"
                                    strokeWidth={isActive ? 2.5 : 2}
                                  />
                                  <span
                                    className={cn(
                                      'text-[10px] text-center leading-tight line-clamp-2',
                                      isActive && 'font-semibold'
                                    )}
                                  >
                                    {item.label}
                                  </span>
                                </motion.button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
