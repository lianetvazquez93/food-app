import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer oL6dii4JkRwdRooFVsN-ulzCrwfEhSJcA46VlBvG89sYRgdMlXzmUe0pM5evVPUVF2DSg7xp0mvPR8GX1QQlv7440fZ9o4kHphdqtnaI9HQKmTI9DOf78TRjYXn0X3Yx",
  },
});
