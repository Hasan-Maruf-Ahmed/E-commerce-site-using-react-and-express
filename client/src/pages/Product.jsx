import { useProductContext } from "../hooks/useProductContext"
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { formatPrice } from "../utils/formatePrice";
import { useCartContext } from "../hooks/useCartContext";
import { useAuthContext } from "../hooks/useAuthContext";
import { toast } from "react-toastify";

export const Product = () => {
  const { products } = useProductContext();
  const { addToCart } = useCartContext();
  const { user } = useAuthContext();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    const foundProduct = products.find((e) => e._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    }
    setLoading(false);
  }, [products, id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }
  const handleMinusQuantity = () => {
    setQuantity(quantity-1 < 1 ? 1 : quantity - 1);
  }
  const handlePlusQuantity = () => {
    setQuantity(quantity+1);
  }
  const handleAddToCart = () => {
    if(user){
      addToCart(user.userId, id, quantity)
    }
    else {
      toast.error("User not logged in");
    }
  }
  return (
    <div className="mx-16 my-8 py-8 px-10 bg-white shadow-lg">
      <div className="flex justify-center items-center gap-12">
        <div className="w-1/2">
          <img src={product.image} alt={product.name} className="w-96" />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-2xl">{product.name}</span>
          <span className="text-orange-600 font-bold">{formatPrice(product.price)}</span>
          <div className="flex flex-row gap-8 text-lg">
            <div>
            <i className='bx bxs-star text-yellow-500'></i>
            <i className='bx bxs-star text-yellow-500'></i>
            <i className='bx bxs-star text-yellow-500'></i>
            <i className='bx bxs-star text-yellow-500'></i>
            <i className='bx bxs-star text-yellow-500'></i>
            </div>
            <span><i className='bx bx-heart text-orange-500'></i></span>
          </div>
          <div>
            <ul className="list-disc space-y-2 text-gray-700">
              <li>iunt magni cum eligendi veritatis, accusamus porro incidunt sint.</li>
              <li>udiandae, omnis i delectus vero ipsam totam, adipisci, ea ab. Nam ea saepe dolore rem iure a?</li>
              <li> fugiat sunt? Odio facere porro natus voluptates nam temporibus.</li>
              <li>Loremrfat sunt? Odio facere porro natus voluptates nam temporibus.</li>
              <li>Lorem ip perferendis io facere porro natus voluptates nam temporibus.</li>
              <li>Lgnissimos libero ullam quasi mollitia sequi, architecto eos iste fugiat sunt? Odio facere porro natus voluptates nam temporibus.</li>
            </ul>
          </div>
          <div className="flex flex-row gap-5 mt-5">
            <div className="flex gap-2 justify-center items-center">
              <button className="bg-gray-100 h-full w-12 font-bold text-xl flex justify-center items-center rounded-xl" onClick={handleMinusQuantity}>-</button>
              <span className="bg-gray-100 h-full w-12 font-bold text-xl flex justify-center items-center rounded-xl">{quantity}</span>
              <button className="bg-gray-100 h-full w-12 font-bold text-xl flex justify-center items-center rounded-xl" onClick={handlePlusQuantity}>+</button>
            </div>
            <button className="bg-yellow-500 py-3 px-5 rounded-lg" onClick={handleAddToCart}>Add to cart</button>
            <button className="bg-orange-600 py-3 px-5 rounded-lg">Buy Now</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-8 mt-8">
        <div>
          <button className="bg-black text-white py-3 px-5 font-bold mr-4 rounded-md">Description</button>
          <button className="bg-black text-white py-3 px-5 font-bold mr-4 rounded-md">Care Guide</button>
          <button className="bg-black text-white py-3 px-5 font-bold mr-4 rounded-md">Review</button>
        </div>
        <div>
          <p className="text-gray-700 mb-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ipsam est unde architecto vitae placeat quod reprehenderit ex commodi, eos minus pariatur exercitationem maxime, enim, perferendis libero omnis? Expedita, doloremque.
          Quod quo voluptatem minus repellat, atque eos adipisci soluta quisquam nulla odio ab recusandae! Delectus quaerat consectetur numquam sequi atque, quia placeat voluptates, deleniti, eligendi aspernatur vitae omnis magni quidem.
          Facilis fugit culpa nobis deserunt labore est quae illum animi, eligendi soluta esse, voluptatem recusandae ut necessitatibus nostrum itaque provident iusto nesciunt doloremque odio, aperiam debitis tempore numquam beatae. Iste.
          Culpa accusamus rem optio eligendi? Repellendus ullam nam eius vero, ut animi corrupti illum vitae, iusto repellat excepturi neque totam aliquid! Aliquid nemo neque officiis voluptates ad adipisci expedita sequi.
          Cumque aliquid sit id similique voluptas quibusdam reprehenderit, perspiciatis officia officiis quaerat voluptate sapiente perferendis ipsa non molestias doloribus, saepe quasi atque sed ratione eos porro illum! Necessitatibus, exercitationem obcaecati.
          Quis, id. Saepe, minima neque impedit fuga iure corporis vero id, similique consectetur possimus maxime adipisci aliquam natus praesentium. Autem ea a corporis expedita inventore eveniet modi voluptates, numquam consequatur.
          Repudiandae cupiditate tempora nostrum tempore impedit! Recusandae perspiciatis eaque officia deserunt quas nulla minima consequuntur, tempora cum? Vitae ratione sint et veniam omnis veritatis, voluptatem, ut, voluptatum reprehenderit fugit nulla.
          Earum tempora officiis fugiat repellendus, aperiam aspernatur libero ea, provident laudantium quasi quibusdam, obcaecati ipsa voluptatibus esse. Ex praesentium provident ipsa, incidunt dolores amet explicabo voluptas dignissimos ipsam repudiandae sed?
          Accusantium omnis quos necessitatibus perspiciatis corporis facere reiciendis, unde quas voluptate maiores placeat soluta aspernatur neque aliquam iusto molestiae explicabo. Repellendus velit asperiores officiis cumque labore a laborum expedita ex?
          Soluta laborum totam quo in alias expedita, aspernatur reiciendis dolorem doloremque accusantium voluptatibus dolorum placeat cupiditate illo blanditiis id rerum unde perferendis at eligendi quasi quos eos sed ut. Labore.</p>
          <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid cumque molestiae iusto labore quibusdam temporibus eum expedita quisquam possimus error alias architecto doloribus repellendus unde maiores ipsam, mollitia nostrum quia.
          Corrupti deleniti iusto deserunt rerum aspernatur illum, vitae nisi, excepturi corporis mollitia, natus ipsam obcaecati expedita illo architecto. Possimus exercitationem sapiente voluptate repudiandae et! Laboriosam itaque inventore voluptatibus qui consectetur!
          Natus eaque ea odit voluptatem itaque in recusandae inventore tenetur expedita provident pariatur dolorum saepe autem vero quibusdam ipsum fugiat, vitae aliquid rem dolor? Eos consectetur omnis quibusdam sequi vitae!
          Recusandae, tempora. Deleniti nam nemo at voluptatem repudiandae dolor fugiat praesentium, soluta voluptate ducimus hic nulla qui sunt iste aperiam repellat quisquam impedit neque minus recusandae esse? Facilis, placeat voluptatem!
          Iste, saepe qui. Magni ducimus qui similique cum ipsum vel. Sapiente officia, possimus accusantium laboriosam aspernatur molestias vitae debitis ea ex harum repudiandae velit earum! Eligendi, nemo? Iure, deserunt labore.</p>
        </div>
      </div>
    </div>
  )
}
