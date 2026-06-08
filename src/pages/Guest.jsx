import { Link } from "react-router-dom";
import { useState } from "react";
import {
  FaHeart,
  FaStar,
  FaCheckCircle,
  FaArrowRight,
  FaFire,
  FaShoppingBag,
} from "react-icons/fa";

// ─── DATA ─────────────────────────────────────────────────────

const products = [
  {
    id: 1,
    name: "Nasi Goreng Spesial",
    bid: "1/20",
    price: "Rp45.000",
    likes: 322,
    bidders: 9,
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?w=400&h=320&fit=crop",
  },
  {
    id: 2,
    name: "Ayam Bakar Madu",
    bid: "5/11",
    price: "Rp55.000",
    likes: 420,
    bidders: 10,
    image:
      "https://images.unsplash.com/photo-1598514982901-c4a820b72ca5?w=400&h=320&fit=crop",
  },
  {
    id: 3,
    name: "Soto Ayam Lamongan",
    bid: "2/31",
    price: "Rp35.000",
    likes: 12,
    bidders: 10,
    image:
      "https://images.unsplash.com/photo-1555126634-323283e090fa?w=400&h=320&fit=crop",
  },
  {
    id: 4,
    name: "Rendang Padang",
    bid: "3/16",
    price: "Rp65.000",
    likes: 20,
    bidders: 8,
    image:
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=320&fit=crop",
  },
  {
    id: 5,
    name: "Gado-Gado Jakarta",
    bid: "6/50",
    price: "Rp30.000",
    likes: 205,
    bidders: 15,
    image:
      "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=320&fit=crop",
  },
];

const testimonials = [
  {
    id: 1,
    name: "Andi Prasetyo",
    rating: 5,
    avatar:
      "https://avatar-placeholder.iran.liara.run/public/boy?username=Andi",
    review:
      "Makanannya enak banget dan pengirimannya cepat!",
  },
  {
    id: 2,
    name: "Sari Dewi",
    rating: 5,
    avatar:
      "https://avatar-placeholder.iran.liara.run/public/girl?username=Sari",
    review:
      "Aplikasi Sedap memudahkan saya pesan makan siang.",
  },
  {
    id: 3,
    name: "Budi Santoso",
    rating: 4,
    avatar:
      "https://avatar-placeholder.iran.liara.run/public/boy?username=Budi",
    review:
      "Rendang Padang di sini autentik sekali.",
  },
  {
    id: 4,
    name: "Mega Lestari",
    rating: 5,
    avatar:
      "https://avatar-placeholder.iran.liara.run/public/girl?username=Mega",
    review:
      "Pelayanannya premium dan tampilannya sangat modern.",
  },
  {
    id: 5,
    name: "Rizky Firmansyah",
    rating: 5,
    avatar:
      "https://avatar-placeholder.iran.liara.run/public/boy?username=Rizky",
    review:
      "Menu makanannya lengkap dan kualitasnya selalu konsisten.",
  },
];

// ─── COMPONENT ───────────────────────────────────────────────

export default function Guest() {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <>
      {/* HERO */}
      <section className="relative py-28 px-6 overflow-hidden">
        {/* BLUR EFFECT */}
        <div className="absolute top-[-200px] left-[-200px] w-[500px] h-[500px] bg-[#00b07430] rounded-full blur-3xl pointer-events-none"></div>

        <div className="absolute bottom-[-200px] right-[-200px] w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">
          {/* LEFT */}
          <div>
            <div className="inline-flex items-center gap-2 bg-[#1b1b2c] border border-white/5 rounded-full px-4 py-2 text-sm text-[#00B074] mb-6">
              <FaFire />
              Trending Food Marketplace
            </div>

            <h1 className="text-5xl lg:text-7xl font-black leading-tight mb-6">
              Nikmati
              <span className="bg-gradient-to-r from-[#00B074] to-[#00d084] bg-clip-text text-transparent">
                {" "}
                Kuliner
              </span>
              <br />
              Nusantara
            </h1>

            <p className="text-gray-400 leading-8 text-lg max-w-xl mb-10">
              Sedap menghadirkan pengalaman memesan makanan modern
              dengan tampilan premium seperti marketplace digital
              masa kini.
            </p>

            <div className="flex flex-wrap gap-4">
              <Link
                to="/register"
                className="px-8 py-4 rounded-2xl bg-gradient-to-r from-hijau to-[#00d084] font-semibold hover:scale-105 transition shadow-xl shadow-green-500/20"
              >
                Mulai Sekarang
              </Link>

              <button className="px-8 py-4 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/10 transition">
                Explore Menu
              </button>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-6 mt-14">
              <div>
                <h2 className="text-3xl font-bold">15K+</h2>

                <p className="text-gray-500 text-sm mt-1">
                  Customer
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">250+</h2>

                <p className="text-gray-500 text-sm mt-1">
                  Restaurant
                </p>
              </div>

              <div>
                <h2 className="text-3xl font-bold">98%</h2>

                <p className="text-gray-500 text-sm mt-1">
                  Satisfaction
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative">
            <div className="absolute -top-10 -right-10 w-72 h-72 bg-[#00B07420] rounded-full blur-3xl"></div>

            <div className="relative bg-[#1a1a2e]/80 backdrop-blur-xl border border-white/10 rounded-[30px] overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1200"
                alt="hero"
                className="w-full h-[600px] object-cover"
              />

              {/* FLOAT CARD */}
              <div className="absolute bottom-6 left-6 right-6 bg-[#111827dd] backdrop-blur-xl border border-white/10 rounded-3xl p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-xl font-bold">
                      Nasi Goreng Premium
                    </h3>

                    <p className="text-gray-400 mt-1">
                      Most Popular Menu
                    </p>
                  </div>

                  <div className="w-14 h-14 rounded-2xl bg-[#00B074] flex items-center justify-center text-2xl">
                    🍜
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          {/* TITLE */}
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-[#00B074] font-semibold mb-3">
                POPULAR MENU
              </p>

              <h2 className="text-4xl font-bold">
                Produk Unggulan
              </h2>
            </div>

            <Link
              to="/login"
              className="flex items-center gap-2 text-[#00B074] font-semibold"
            >
              Lihat Semua
              <FaArrowRight />
            </Link>
          </div>

          {/* GRID */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-7">
            {products.map((p) => (
              <div
                key={p.id}
                className="group bg-[#171727] border border-white/5 rounded-[28px] overflow-hidden hover:-translate-y-2 transition duration-300 hover:border-[#00B07450]"
              >
                {/* IMAGE */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    className="w-full h-[260px] object-cover group-hover:scale-110 transition duration-500"
                  />

                  <button
                    onClick={() => toggleLike(p.id)}
                    className={`absolute top-4 right-4 w-11 h-11 rounded-full flex items-center justify-center backdrop-blur-xl transition ${
                      liked[p.id]
                        ? "bg-pink-500 text-white"
                        : "bg-black/40 text-white"
                    }`}
                  >
                    <FaHeart />
                  </button>
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-2 text-[#00B074] text-sm">
                      <FaCheckCircle />
                      Best Seller
                    </div>

                    <div className="text-xs text-gray-500">
                      {p.bid}
                    </div>
                  </div>

                  <h3 className="text-xl font-bold mb-2">
                    {p.name}
                  </h3>

                  <div className="flex items-center justify-between mt-6">
                    <div>
                      <p className="text-gray-500 text-sm">
                        Price
                      </p>

                      <h4 className="text-[#00B074] text-xl font-bold">
                        {p.price}
                      </h4>
                    </div>

                    <button className="w-12 h-12 rounded-2xl bg-[#00B074] flex items-center justify-center hover:scale-110 transition">
                      <FaShoppingBag />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="py-24 px-6 bg-[#111120]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#00B074] font-semibold mb-4">
              TESTIMONIAL
            </p>

            <h2 className="text-5xl font-bold">
              Apa Kata Mereka?
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.id}
                className="bg-[#1a1a2e] border border-white/5 rounded-[28px] p-8"
              >
                {/* STAR */}
                <div className="flex gap-1 mb-5">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FaStar
                      key={star}
                      className={`${
                        star <= t.rating
                          ? "text-[#00B074]"
                          : "text-gray-700"
                      }`}
                    />
                  ))}
                </div>

                <p className="text-gray-400 leading-8 italic">
                  "{t.review}"
                </p>

                <div className="flex items-center gap-4 mt-8">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-14 h-14 rounded-full border-2 border-[#00B074]"
                  />

                  <div>
                    <h4 className="font-bold">
                      {t.name}
                    </h4>

                    <p className="text-gray-500 text-sm">
                      Pelanggan Sedap
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}