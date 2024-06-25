/* eslint-disable react/prop-types */
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useEffect, useMemo } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useCartContext } from "../hooks/useCartContext";
import { formatPrice } from "../utils/formatePrice";
import { Link } from "react-router-dom";

export const Cart = ({ open, setOpen }) => {
  const { state, fetchCart, removeFromCart, updateQuantity } = useCartContext();

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      fetchCart(user.userId);
    }
  }, [user, fetchCart]);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity <= 0) {
      removeFromCart(user.userId, productId);
    } else {
      updateQuantity(user.userId, productId, quantity);
    }
    // console.log(productId, quantity);
  }
  const subtotal = useMemo(() => {
    return state.items.reduce((total, product) => total + product.productId.price*product.quantity, 0);
  }, [state.items]);

  return (
    <Dialog className="relative z-10" open={open} onClose={setOpen}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity duration-500 ease-in-out data-[closed]:opacity-0"
      />

      <div className="fixed inset-0 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
            <DialogPanel
              transition
              className="pointer-events-auto w-screen max-w-md transform transition duration-500 ease-in-out data-[closed]:translate-x-full sm:duration-700"
            >
              <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
                <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
                  <div className="flex items-start justify-between">
                    <DialogTitle className="text-lg font-medium text-gray-900">
                      Shopping cart
                    </DialogTitle>
                    <div className="ml-3 flex h-7 items-center">
                      <button
                        type="button"
                        className="relative -m-2 p-2 text-gray-400 hover:text-gray-500"
                        onClick={() => setOpen(false)}
                      >
                        <span className="absolute -inset-0.5" />
                        <span className="sr-only">Close panel</span>
                        <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                  </div>

                  <div className="mt-8">
                    <div className="flow-root">
                      <ul
                        role="list"
                        className="-my-6 divide-y divide-gray-200"
                      >
                        {state.items.map((product) => {
                          const item = product.productId;
                          if (!item) {
                            return null; // Skip rendering if product is not defined
                          }
                          return (
                            <li key={product._id} className="flex py-6">
                              <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                <img
                                  src={product.productId.image}
                                  alt={product.productId.name}
                                  className="h-full w-full object-cover object-center"
                                />
                              </div>

                              <div className="ml-4 flex flex-1 flex-col">
                                <div>
                                  <div className="flex justify-between text-base font-medium text-gray-900">
                                    <Link to={`/product/${product.productId._id}`} onClick={() => setOpen(false)}><h3>{product.productId.name}</h3></Link> 
                                    <p className="ml-4">
                                      {formatPrice(
                                        product.productId.price *
                                          product.quantity
                                      )}
                                    </p>
                                  </div>
                                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                                </div>
                                <div className="flex flex-1 items-end justify-between text-sm">
                                  <div className="flex justify-center items-center">
                                    <button className="bg-gray-200 h-full w-6 font-bold flex justify-center items-center rounded-md" onClick={() => 
                                      handleQuantityChange(product.productId._id, product.quantity - 1)
                                    }>-</button>
                                    <span className="h-full w-8 flex justify-center items-center rounded-md">{product.quantity}</span> 
                                    <button className="bg-gray-200 h-full w-6 font-bold flex justify-center items-center rounded-md" onClick={() => 
                                      handleQuantityChange(product.productId._id, product.quantity + 1)
                                    }>+</button>       
                                  </div>

                                  <div className="flex">
                                    <button
                                      type="button"
                                      onClick={() => {
                                        removeFromCart(
                                          user.userId,
                                          product.productId._id
                                        );
                                      }}
                                      className="font-medium text-indigo-600 hover:text-indigo-500"
                                    >
                                      Remove
                                    </button>
                                  </div>
                                </div>
                              </div>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
                  <div className="flex justify-between text-base font-medium text-gray-900">
                    <p>Subtotal</p>
                    <p>{formatPrice(subtotal)}</p>
                  </div>
                  <p className="mt-0.5 text-sm text-gray-500">
                    Shipping and taxes calculated at checkout.
                  </p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="flex items-center justify-center rounded-md border border-transparent bg-orange-500 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-orange-600"
                    >
                      Checkout
                    </a>
                  </div>
                  <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                    <p>
                      or{" "}
                      <button
                        type="button"
                        className="font-medium text-orange-500 hover:text-orange-600"
                        onClick={() => setOpen(false)}
                      >
                        Continue Shopping
                        <span aria-hidden="true"> &rarr;</span>
                      </button>
                    </p>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </div>
    </Dialog>
  );
};
