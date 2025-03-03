import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),
  createProduct: async (product) => {
    if (!product.name || !product.price || !product.image) {
      return { success: false, message: "All fields are required" };
    }
    try {
      const response = await fetch("/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      set((state) => ({
        products: [...state.products, data.data],
      }));
      return { success: true, message: "Product created successfully" };
    } catch (error) {
      console.log(error);
    }
  },
  fetchProducts: async () => {
    try {
      const response = await fetch("/api/products/");
      const data = await response.json();
      set({ products: data.data });
    } catch (error) {
      console.log(error);
    }
  },
  deleteProduct: async (id) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "DELETE",
      });
      const data = await response.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => ({
        products: state.products.filter((product) => product._id !== id),
      }));
      return { success: true, message: "Product deleted successfully" };
    } catch (error) {
      console.log(error);
    }
  },
  updatedProduct: async (id, product) => {
    try {
      const response = await fetch(`/api/products/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });
      const data = await response.json();
      if (!data.success) return { success: false, message: data.message };
      set((state) => ({
        products: state.products.map((product) =>
          product._id === id ? data.data : product
        ),
      }));
      return { success: true, message: "Product updated successfully" };
    } catch (error) {
      console.log(error);
    }
  },
}));
