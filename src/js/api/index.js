const BASE_URL = "http://localhost:3000/api";

const HTTP_METHOD = {
  POST(data) {
    return {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
  },
  PUT(data) {
    return {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: data ? JSON.stringify(data) : null,
    };
  },
  DELETE() {
    return {
      method: "DELETE",
    };
  },
};

const request = async (url, option) => {
  const reponse = await fetch(url, option);
  if (!reponse.ok) {
    alert("에러가 발생했습니다. 다시 시도해주세요");
    console.error(e);
  }
  return reponse.json();
};

const requestWithoutJson = async (url, option) => {
  const reponse = await fetch(url, option);
  if (!reponse.ok) {
    alert("에러가 발생했습니다. 다시 시도해주세요");
    console.error(e);
  }
  return reponse;
};

const MenuApi = {
  async getAllMenuByCategory(category) {
    return request(`${BASE_URL}/category/${category}/menu`);
  },

  async createMenu(category, name) {
    return request(
      `${BASE_URL}/category/${category}/menu`,
      HTTP_METHOD.POST({ name })
    );
    // const response = await fetch(`${BASE_URL}/category/${category}/menu`, {
    //   method: "POST",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({ name }),
    // });
  },

  async updateMenu(category, name, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.PUT({ name })
    );
    // const response = await fetch(
    //   `${BASE_URL}/category/${category}/menu/${menuId}`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name }),
    //   }
    // );
    // if (!response.ok) {
    //   console.error("에러가 발생했습니다.");
    // }
    // return response.json();
  },

  async toggleSoldOuntMenu(category, menuId) {
    return request(
      `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
      HTTP_METHOD.PUT()
    );
    // const response = await fetch(
    //   `${BASE_URL}/category/${category}/menu/${menuId}/soldout`,
    //   {
    //     method: "PUT",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ name }),
    //   }
    // );
    // if (!response.ok) {
    //   console.error("에러가 발생했습니다.");
    // }
    // return response.json();
  },

  async deleteMenu(category, menuId) {
    return requestWithoutJson(
      `${BASE_URL}/category/${category}/menu/${menuId}`,
      HTTP_METHOD.DELETE()
    );
    // const response = await fetch(
    //   `${BASE_URL}/category/${category}/menu/${menuId}`,
    //   {
    //     method: "DELETE",
    //   }
    // );
    // if (!response.ok) {
    //   console.error("에러가 발생했습니다.");
    // }
  },
};

export default MenuApi;
