import { api } from "@/lib/axios";
import type { ProductDTO } from "../dtos/product-dto";

const ENDPOINT = '/product'; // Ajuste para '/products' se a sua API usar no plural

export const ProductService = {
  async listAll(): Promise<ProductDTO[]> {
    const result = await api.get<ProductDTO[]>(ENDPOINT);
    return result.data;
  },

  async findOne(id: string): Promise<ProductDTO> {
    const result = await api.get<ProductDTO>(`${ENDPOINT}/${id}`);
    return result.data;
  },

  async create(data: Omit<ProductDTO, 'id'>): Promise<ProductDTO> {
    const result = await api.post<ProductDTO>(ENDPOINT, data);
    return result.data;
  },

  async delete(id: string): Promise<void> {
    await api.delete(`${ENDPOINT}/${id}`);
  }
};