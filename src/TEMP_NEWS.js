const tempNews = [
  {
    date: "08-10-2022T23:02:11+03:00",
    header: "Елена Романова",
    news_full_text:
      'Друзья! У меня есть очень юный телеграм-канал, который ждёт своих подписчиков!   Вчера я там запустила проект "Сказки на ночь" (это для взрослых), каждый вечер буду публиковать сказки,       читаю их я, может, вы оцените....',
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 1,
  },
  {
    date: "09-10-2021T23:02:11+03:00",
    header:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    news_full_text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 2,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    header: "Елена Романова2",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [],
    id: 3,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    header: "Елена Романова1",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 4,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    header:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    news_full_text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 5,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    header: "Елена Романова2",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [],
    id: 6,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    header: "Елена Романова1",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 7,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    header:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    news_full_text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 8,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    header: "Елена Романова2",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [],
    id: 9,
  },
  {
    date: "10-10-2022T22:02:11+03:00",
    header: "Елена Романова1",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 10,
  },
  {
    date: "09-10-2022T23:02:11+03:00",
    header:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium",
    news_full_text:
      "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?",
    news_images: [
      {
        image:
          "https://cdn.lifehacker.ru/wp-content/uploads/2010/02/4980CD4D-23DB-4551-A637-E0C8EFABA2AA.jpg",
      },
    ],
    id: 11,
  },
  {
    date: "10-10-2022T23:02:11+03:00",
    header: "Елена Романова2",
    news_full_text: "Оля,огромное вам спасибо! Для Ромы это очень ВАЖНО!...",
    news_images: [],
    id: 12,
  }
];

export default tempNews;
