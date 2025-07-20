/* eslint-disable @typescript-eslint/no-explicit-any */
import { expect, test, describe, vi, afterEach } from "vitest";
import axios from "axios";
import { getAllNews, getSearchNews, getDetailNews } from "./news";

vi.mock("axios");

describe("news fetchers", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  test("Fetch All News Test", async () => {
    (axios as any).mockResolvedValueOnce({
      status: 200,
      data: { response: { docs: [{ _id: "1" }] } },
    });
    const filters = { page: 1 };
    const data = await getAllNews(filters);
    expect(data).toBeDefined();
    expect(data.docs.length).toBeGreaterThan(0);
  });

  test("Fetch Filtered News Test", async () => {
    (axios as any).mockResolvedValueOnce({
      status: 200,
      data: { response: { docs: [{ _id: "2" }] } },
    });
    const filters = { page: "1", search: "Software Engineer" };
    const data = await getSearchNews(filters);
    expect(data).toBeDefined();
    expect(data.docs.length).toBeGreaterThan(0);
  });

  test("Fetch Detail News Test", async () => {
    (axios as any).mockResolvedValueOnce({
      status: 200,
      data: { response: { docs: [{ _id: "3" }] } },
    });
    const url = "nyt%3A%2F%2Farticle%2Ff51d743a-afd4-54c0-95a1-82cd78eb806c";
    const data = await getDetailNews(url);
    expect(data).toBeDefined();
    expect(data.docs.length).toBeGreaterThan(0);
  })});