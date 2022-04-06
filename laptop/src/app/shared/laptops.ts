import {Laptop} from "./laptop";

export const LAPTOPS: Laptop[] = [
    {
      id: "0",
      name: "Acer Laptop",
      image: "images/acer.jpg",
      featured: false,
      price: "1750",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. Aenean sollicitudin sed quam ac lobortis. Morbi gravida fermentum massa, eu lacinia.",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 4,
          comment: "Aliquam porta sem ac ipsum tincidunt",
          author: "Павел",
          date: "2020-09-05"
        },
        {
          rating: 3,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    },
    {
      id: "1",
      name: "Acer Laptop",
      image: "images/acer2.jpg",
      featured: false,
      price: "1789",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. Aenean sollicitudin sed quam ac lobortis. Morbi gravida fermentum massa, eu lacinia.",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 3,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    },
    {
      id: "2",
      name: "HP Laptop",
      image: "images/hp.jpg",
      featured: false,
      price: "2010",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. Aenean sollicitudin sed quam ac lobortis. Morbi gravida fermentum massa, eu lacinia.",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 4,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    },
    {
      id: "3",
      name: "Lenovo Laptop",
      image: "images/lenovo.jpg",
      featured: false,
      price: "1600",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. Aenean sollicitudin sed quam ac lobortis. Morbi gravida fermentum massa, eu lacinia.",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 3,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    },
    {
      id: "4",
      name: "Apple Laptop",
      image: "images/apple.png",
      featured: true,
      price: "3013",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. ",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 5,
          comment: "Lorem ipsum dolor sit amet, consectetur adipiscing",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    },
    {
      id: "5",
      name: "Honor Laptop",
      image: "images/honor.png",
      featured: true,
      price: "2500",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed semper gravida iaculis. Donec gravida efficitur orci eu molestie. ",
      comments: [
        {
          rating: 5,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat blandit",
          author: "Ольга",
          date: "2021-10-16"
        },
        {
          rating: 4,
          comment: "Aliquam porta sem ac ipsum tincidunt, sed interdum erat",
          author: "Леша",
          date: "2021-12-14"
        }
      ]
    }
];
