const prefix = "https://consultation-api.abendltd.com/api/v1/";

interface FetchOptions {
  method: string;
  headers: Record<string, string>;
  body?: string;
}

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

interface FetchResponse<T> {
  data: T | null;
  error: Error | null;
}

export function useFetch() {
  const fetchData = async <T>(
    endpoint: string,
    method: HttpMethod = "GET",
    data: unknown = null
  ): Promise<FetchResponse<T>> => {
    const url = `${prefix}${endpoint}`;

    const options: FetchOptions = {
      method,
      headers: {
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    try {
      const res = await fetch(url, options);
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      const responseData: T = await res.json();
      return { data: responseData, error: null };
    } catch (error) {
      return { data: null, error: error as Error };
    }
  };

  const getData = async <T>(endpoint: string): Promise<FetchResponse<T>> => {
    return await fetchData<T>(endpoint, "GET");
  };

  const createData = async <T>(
    endpoint: string,
    data: unknown
  ): Promise<FetchResponse<T>> => {
    return await fetchData<T>(endpoint, "POST", data);
  };

  const updateData = async <T>(
    endpoint: string,
    data: unknown
  ): Promise<FetchResponse<T>> => {
    return await fetchData<T>(endpoint, "PUT", data);
  };

  const deleteData = async <T>(
    endpoint: string,
    data: unknown
  ): Promise<FetchResponse<T>> => {
    return await fetchData<T>(endpoint, "DELETE", data);
  };

  return {
    getData,
    createData,
    updateData,
    deleteData,
  };
}
