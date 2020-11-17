const images = [
  {
    id: 0,
    altText: "Bridge over a green waterfall",
    credit: `<span>Photo by <a href="https://unsplash.com/@blakeverdoorn?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Blake Richard Verdoorn</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 1,
    altText: "The stars",
    credit: `<span>Photo by <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">eberhard grossgasteiger</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1536431311719-398b6704d4cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 2,
    altText: "Night lights",
    credit: `<span>Photo by <a href="https://unsplash.com/@vingtcent?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Vincent Guth</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1483086431886-3590a88317fe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 3,
    altText: "Plitvice Lakes, Crotia",
    credit: `<span>Photo by <a href="https://unsplash.com/@eberhardgross?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">eberhard grossgasteiger</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1550236520-7050f3582da0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    count: 0
  },
  {
    id: 4,
    altText: "Boathouse on a mountain lake",
    credit: `<span>Photo by <a href="https://unsplash.com/@lucabravo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luca Bravo</a> on <a href="https://unsplash.com/s/photos/nature?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1470770903676-69b98201ea1c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
    count: 0
  },
  {
    id: 5,
    altText: "Follow the fern",
    credit: `<span>Photo by <a href="https://unsplash.com/@huefnerdesign?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tim Hüfner</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1605540838963-034885df2ef0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 6,
    altText: "Kyoto streets",
    credit: `<span>Photo by <a href="https://unsplash.com/@withluke?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Luke Stackpoole</a> on <a href="https://unsplash.com/?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1605523746900-8aa30db1befd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80",
    count: 0
  },
  {
    id: 7,
    altText: "Sunset at the beach",
    credit: `<span>Photo by <a href="https://unsplash.com/@cristofer?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Cristofer Jeschke</a> on <a href="https://unsplash.com/s/photos/beach?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1559494007-9f5847c49d94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 8,
    altText: "Mount Fuji",
    credit: `<span>Photo by <a href="https://unsplash.com/@malcoo?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tomáš Malík</a> on <a href="https://unsplash.com/s/photos/fuji?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1576675466969-38eeae4b41f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 9,
    altText: "River",
    credit: `<span>Photo by <a href="https://unsplash.com/@jack_anstey?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jack Anstey</a> on <a href="https://unsplash.com/s/photos/river?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1519852476561-ec618b0183ba?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1338&q=80",
    count: 0
  },
  {
    id: 10,
    altText: "Fields of gold",
    credit: `<span>Photo by <a href="https://unsplash.com/@sherman?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">sherman L</a> on <a href="https://unsplash.com/s/photos/plant?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1545709021-95c35d97a339?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 11,
    altText: "Eltz Castle",
    credit: `<span>Photo by <a href="https://unsplash.com/@timreb9?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tim Rebkavets</a> on <a href="https://unsplash.com/s/photos/castle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1518709268805-4e9042af9f23?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=631&q=80",
    count: 0
  },
  {
    id: 12,
    altText: "Magic Kingdom",
    credit: `<span>Photo by <a href="https://unsplash.com/@codypboard?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Cody Board</a> on <a href="https://unsplash.com/s/photos/castle?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1534450539339-6d1c81ad18e2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=719&q=80",
    count: 0
  },
  {
    id: 13,
    altText: "Flower against the sky",
    credit: `<span>Photo by <a href="https://unsplash.com/@mygallery?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">KS KYUNG</a> on <a href="https://unsplash.com/s/photos/flower?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1570949144026-8f8141748760?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
    count: 0
  },
  {
    id: 14,
    altText: "Maligne Lake",
    credit: `<span>Photo by <a href="https://unsplash.com/@its_tgain?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Tom Gainor</a> on <a href="https://unsplash.com/s/photos/lake?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1531512073830-ba890ca4eba2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1444&q=80",
    count: 0
  },
  {
    id: 15,
    altText: "Forest from below",
    credit: `<span>Photo by <a href="https://unsplash.com/@mischievous_penguins?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Casey Horner</a> on <a href="https://unsplash.com/s/photos/forest?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
    count: 0
  },
  {
    id: 16,
    altText: "Camping under the stars",
    credit: `<span>Photo by <a href="https://unsplash.com/@jonathanforage?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Jonathan Forage</a> on <a href="https://unsplash.com/s/photos/campfire?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1504851149312-7a075b496cc7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=649&q=80",
    count: 0
  },
  {
    id: 17,
    altText: "Sunset beach views",
    credit: `<span>Photo by <a href="https://unsplash.com/@cjoudrey?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Christian Joudrey</a> on <a href="https://unsplash.com/s/photos/hawaii?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">Unsplash</a></span>`,
    url:
      "https://images.unsplash.com/photo-1462400362591-9ca55235346a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1317&q=80",
    count: 0
  }
];

export default images;
