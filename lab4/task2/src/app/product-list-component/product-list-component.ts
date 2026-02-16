import { Component } from '@angular/core';
import { Product } from './../product.model';
import { ProductCardComponent } from './../product-card-component/product-card-component';

@Component({
  selector: 'app-product-list-component',
  imports: [ProductCardComponent],
  templateUrl: './product-list-component.html',
  styleUrl: './product-list-component.css',
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Картина Lakarti Аниме Берсерк 22256990531',
      description: 'Картина Lakarti Аниме Берсерк 22256990531 холст на подрамнике 40x50 см',
      price: 375467,
      rating: 4.8,
      link: "https://kaspi.kz/shop/p/lakarti-anime-berserk-22256990531-holst-na-podramnike-40x50-sm-133440197/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p05/p91/20138046.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pb1/p90/20138049.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p45/p8e/20138050.png?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/p05/p91/20138046.png?format=gallery-medium",
    },
    {
      id: 2,
      name: 'Рашгард FitStyle На спине черный',
      description: 'Рашгард FitStyle — стильный и функциональный выбор для активных мужчин, которые ценят комфорт и свободу движений. Изготовленный из высококачественного полиэстера, этот рашгард идеально подходит для занятий спортом в любое время года.',
      price: 4898,
      rating: 4.7,
      link: "https://kaspi.kz/shop/p/rashgard-fitstyle-na-spine-250879-chernyi-xl-135504885/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p85/pe4/50746766.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p56/p63/73682736.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p83/p5c/73682738.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pec/p5f/73682737.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9a/p0a/73682741.jpeg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/p9a/p0a/73682741.jpeg?format=gallery-medium",
    },
    {
      id: 3,
      name: 'Наклейки Sticker Universe Одинокий рокер! 0410_bocchi_the_rock',
      description: 'Набор стикеров из аниме Одинокий рокер! - Bocchi the Rock! Они будут прекрасно смотреться на чехле телефона, планшете, ноутбуке или ежедневнике.',
      price: 1290,
      rating: 4.5,
      link: "https://kaspi.kz/shop/p/sticker-universe-odinokii-roker-0410-bocchi-the-rock-109227525/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/hfc/h6d/69777441914910.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h29/h6c/69777443160094.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hb1/h79/69777443749918.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/hcc/had/69777444995102.jpg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/hcc/had/69777444995102.jpg?format=gallery-medium",
    },
    {
      id: 4,
      name: 'One Piece - Roronoa Zoro 18 см',
      description: 'Фигурка Roronoa Zoro из One Piece — великолепное дополнение для коллекционеров и поклонников аниме, которая привнесет атмосферу приключений в ваш дом.',
      price: 6500,
      rating: 4.9,
      link: "https://kaspi.kz/shop/p/one-piece---roronoa-zoro-18-sm-112342449/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h82/ha1/82530114928670.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/he7/hd1/82530115125278.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/h30/h3e/82530115321886.jpg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/h30/h3e/82530115321886.jpg?format=gallery-medium",
    },
    {
      id: 5,
      name: 'Постер Ла-Ла ленд,',
      description: 'Постер Ла-Ла ленд, Райан Гослинг и Эмма Стоун 100x70 см',
      price: 15239,
      rating: 0,
      link: "https://kaspi.kz/shop/p/poster-la-la-lend-raian-gosling-i-emma-stoun-100x70-sm-114820823/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/h13/h95/84565597814814.jpg?format=gallery-medium",
      ],
      image: "",
    },
    {
      id: 6,
      name: 'Наклейки Лист Стикеры Наклейки Коты Мемы 50-шт',
      description: 'Набор наклеек Котики_мемы для творчества. В наборе 50 шт. Для универсального использования.Порадуют как взрослых так и детей.',
      price: 399,
      rating: 5,
      link: "https://kaspi.kz/shop/p/list-stikery-nakleiki-koty-memy-50-sht-129839347/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p6f/p55/61516316.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p05/p52/61516317.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p9c/p4e/61516318.jpeg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/p9c/p4e/61516318.jpeg?format=gallery-medium",
    },
    {
      id: 7,
      name: 'Мягкая игрушка Тун Тун Тун Сахур тралалело тралала, 30 см',
      description: 'Мягкая игрушка Тун Тун Тун Сахур тралалело тралала — это яркий и забавный персонаж, который станет отличным другом для вашего ребёнка. Изготовленная из экологически чистых материалов, она безопасна для детей и идеально подходит для игр и объятий.',
      price: 3209,
      rating: 3.5,
      link: "https://kaspi.kz/shop/p/mjagkaja-igrushka-tun-tun-tun-sahur-tralalelo-tralala-30-sm-mul-tikolor-140122795/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/p12/p1b/88835559.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pf5/pde/83461098.bin?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p7e/p1d/88835560.bin?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/p7e/p1d/88835560.bin?format=gallery-medium",
    },
    {
      id: 8,
      name: 'Фигурка Балерина Капучино Тралалело Тралала 11 см 1 шт',
      description: 'Фигурка итальянских мемов Балерина Капучино. Фигурка изготовлена из качественного пластика, высота составляет 11 см.Благодаря подвижным частям тела фигурка может принять любую позу.',
      price: 3300,
      rating: 2,
      link: "https://kaspi.kz/shop/p/figurka-balerina-kapuchino-tralalelo-tralala-11-sm-1-sht-141203637/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pb3/p2e/48074786.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p49/p2b/48074787.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pe0/p27/48074788.jpeg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/pe0/p27/48074788.jpeg?format=gallery-medium",
    },
    {
      id: 9,
      name: 'Рюкзак Brainrots Tralalero TraLaLa',
      description: 'рюкзак brainrots tralalero tralala. черный рюкзак с модным принтом. очень удобный необычный. имеет хорошую вместительность. лёгкий вес. цвет чёрный',
      price: 4750,
      rating: 1,
      link: "https://kaspi.kz/shop/p/rjukzak-30380562-rjukzak-brainrots-tralalero-tralala1-neilon-chernyi-144530687/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pd3/p83/60181887.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p81/p2e/60181891.jpeg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p07/p1a/60181897.jpeg?format=gallery-medium",
      ],
      image: "https://resources.cdn-kaspi.kz/img/m/p/p07/p1a/60181897.jpeg?format=gallery-medium",
    },
    {
      id: 10,
      name: 'Игровая приставка Valve Steam Deck OLED 512 Гб',
      description: 'Представляем вам Valve Steam Deck OLED — портативную игровую консоль, которая объединяет высокую производительность и удобство использования в одном устройстве. С 512 Гб SSD и поддержкой VR вы сможете наслаждаться любимыми играми в любом месте.',
      price: 353984,
      rating: 4,
      link: "https://kaspi.kz/shop/p/valve-steam-deck-oled-512-gb-115001687/?c=750000000",
      images: [
        "https://resources.cdn-kaspi.kz/img/m/p/pa0/p16/15844428.png?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/pbc/p16/15844429.jpg?format=gallery-medium",
        "https://resources.cdn-kaspi.kz/img/m/p/p28/p19/15844430.jpg?format=gallery-medium",
      ],
      image: "",
    },

  ]

}
