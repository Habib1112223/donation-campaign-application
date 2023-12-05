import { Link, NavLink } from "react-router-dom";
import Logo from "../../../../Resources/Logo.png";
import { useState } from "react";

const Navbar = () => {
      const [isOpen, setIsOpen] = useState(false);

      const menuHandle = () =>{
            setIsOpen(!isOpen)
            console.log(isOpen)
      }
      const handleLinkClick = () => {
            setIsOpen(false);
          };


      return (
            <div className="relative">
                  <nav className="flex justify-between items-center py-[53px]">
                        <Link to='/'><img src={Logo} alt="logo" /></Link>
                        <div className="hidden lg:block">
                              <ul className="flex gap-5">
                                    <li>
                                          <NavLink
                                                to="/"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                }
                                          >
                                                Home
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink
                                                to="/donation"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                }
                                          >
                                                Donation
                                          </NavLink>
                                    </li>
                                    <li>
                                          <NavLink
                                                to="/statistics"
                                                className={({ isActive, isPending }) =>
                                                      isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                }
                                          >
                                                Statistics
                                          </NavLink>
                                    </li>
                              </ul>
                        </div>
                        <div className="pr-7 lg:hidden block">
                              <button className="border-2 p-2" onClick={() => menuHandle()}>{isOpen ? 'X' : "+"}</button>
                              {
                                    isOpen && <div className="w-full bg-white lg:hidden block absolute top-30 right-0 z-50">
                                    <ul className="p-10">
                                          <li>
                                                <NavLink onClick={handleLinkClick}
                                                      to="/"
                                                      className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                      }
                                                >
                                                      Home
                                                </NavLink>
                                          </li>
                                          <li>
                                                <NavLink onClick={handleLinkClick}
                                                      to="/donation"
                                                      className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                      }
                                                >
                                                      Donation
                                                </NavLink>
                                          </li>
                                          <li>
                                                <NavLink onClick={handleLinkClick}
                                                      to="/statistics"
                                                      className={({ isActive, isPending }) =>
                                                            isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
                                                      }
                                                >
                                                      Statistics
                                                </NavLink>
                                          </li>
                                    </ul>
                              </div>
                              }
                        </div>
                  </nav>
            </div>
      );
};

export default Navbar;