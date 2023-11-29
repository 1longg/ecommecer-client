"use client";

import { useRef, useState } from "react";
import {
  useFloating,
  autoUpdate,
  offset,
  flip,
  shift,
  useHover,
  useInteractions,
  arrow,
  FloatingArrow,
  safePolygon,
} from "@floating-ui/react";
import { AnimatePresence, motion } from "framer-motion";
import { CartIcon } from "../Icon/CartIcon";
import { UserIcon } from "../Icon/UserIcon";
import { AccountIcon } from "../Icon/AccountIcon";
import { LogoutIcon } from "../Icon/LogoutIcon";

export default function HeaderLogin({onClickLogout}: {onClickLogout:()=>void}) {
  const arrowRef = useRef(null);

  const [isOpen, setIsOpen] = useState(false);

  const { x, y, strategy, refs, context } = useFloating({
    open: isOpen,
    onOpenChange: setIsOpen,
    middleware: [offset(10), flip(), shift(), arrow({ element: arrowRef })],
    whileElementsMounted: autoUpdate,
  });
  const hover = useHover(context, { move: true, handleClose: safePolygon() });
  const { getReferenceProps, getFloatingProps } = useInteractions([hover]);
  return (
          <div className="flex items-center mr-12">
            <div className="mr-8 cursor-pointer">
              <CartIcon className="w-5 h-5" />
            </div>
            <div ref={refs.setReference} {...getReferenceProps()}>
              <UserIcon className="w-5 h-5" />
            </div>
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  ref={refs.setFloating}
                  style={{
                    position: strategy,
                    top: y ?? 0,
                    left: x ?? 0,
                    width: "max-content",
                    transformOrigin: `top center`,
                    background: "white",
                  }}
                  initial={{ opacity: 0, transform: "scale(0)" }}
                  animate={{ opacity: 1, transform: "scale(1)" }}
                  exit={{ opacity: 0, transform: "scale(0)" }}
                  transition={{ duration: 0.2 }}
                  {...getFloatingProps()}
                >
                  <FloatingArrow
                    ref={arrowRef}
                    context={context}
                    fill="white"
                    stroke="#e5e7eb"
                    strokeWidth={1}
                  />
                  <div className="border px-2 py-2 rounded-md min-w-[200px] text-slate-400 cursor-pointer">
                    <div className="flex items-center mb-2 hover:text-black">
                      <AccountIcon className="w-5 h-5 mr-2" />
                      <p>Profile</p>
                    </div>
                    <div
                      onClick={onClickLogout}
                      className="flex items-center text-slate-400 cursor-pointer hover:text-black "
                    >
                      <LogoutIcon className="w-5 h-5 mr-2" />
                      <p>Log Out</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
  );
}
