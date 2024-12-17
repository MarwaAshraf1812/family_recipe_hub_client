const DummyData = [
    {
      id: 1,
      name: "Mixed Tropical Fruit Salad with Superfood Boosts",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJ87miGHE3mDoPB6dDTDuE62H5gMKUonsChtA4vRVMVP7piJzSyIbU2qoduD-C4Fjn0P7ZSJh7Up8Rwu5InPTmDUNc-C~-cvK8Ts8I-z-jHbb2wFur99gsvZ3hyhu0U4vfztfT4NlAK8Moxzp6Aosjd2L-Zqdfjf3eqiATT7YnvPjdJkb79JBpwlltydqgsopdQTk9nsCCqvdWeburenUjrxHlgZ~EQOcXpHdQXVHmXQ4Zh6yL3nQN6FkMIXhSzMu~UQP1PLHJG-tlkRUNdLX8pB9keCtF6RrLjiNAyWjDUdRT6A9tQhA23g9ZNtr4qXFG4EeDztYsW6CLeZwXAHIw__"
    },
    {
      id: 2,
      name: "Big and Juicy Wagyu Beef Cheeseburger",
      time: "30 Minutes",
      category: "Western",
      image: "https://s3-alpha-sig.figma.com/img/8513/aab8/ce4a091fb4a7a972e7f0ba7d653cedf2?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=donFTP5B~URlhOOni3eh4rh1e6CgDXQqCHpnXDoHslIQl7K1D5U2pS1LiwN2heObo252sQhm~P5s2xfvXgRsv-I2l1NWnEp-64iptWphU4Ph~ThGHMxQU8qXEUZT3AXqy6C-inw5Rg~DN5i9rKWefmaLMNb1x9nMBhb7qiV8J9nK-J82bXsqeJ5JVGt-TR~X45QmPjRckQzWliZTEam7QLqG5BL7GPN7yAi7j1-RUuQELQEKbCSjW-~rtDaFWm-FHCbnUxH8BpfKaJqAOIOEWi19wOP013WdTcyEFP0KLhGgIEpSUC4Niy4mrRR6SJxdD5zoSvqaGV19po1~Lt0hJA__"
    },
    {
      id: 3,
      name: "Healthy Japanese Fried Rice with Asparagus",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://s3-alpha-sig.figma.com/img/91b8/8940/14c8464b47399978beaef54c6ab1a1ce?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=P9FfVoyVoo9V0VGFF7FnXn0BmboiY2PgA9IOGwRQP0pa5U6kocraUBxANKHCanIXcw~Hj20sRwmOIM9I-0RXoIp~gU1uY-Hkpklvoi41W8p~Heqv~y4FcSW~pBh-hE0cgVfx-K8UbhZuTL4OInd-hNSc5v05aJodHvny1gQbecSo3dcGTed3a5PM3JUbGVEcBdC2YKFCzeCmbxd3CQxkUlRQS0TdDoCRC5THBDpe-p2pK8VpzmhR7CsphO1HBnKr2A~0ky51Wrck2hzGrU9c-i8I6bWExqu8h8AsTkWHVWDjoxuvb58MsYmLegkyuY6iUEHHTpqp0IpIO32j-qkDoQ__"
    },
    {
      id: 4,
      name: "Cauliflower Walnut Vegetarian Taco Meat",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://s3-alpha-sig.figma.com/img/9bf6/c3de/19b579cff4368a1bfcba9e2f306d4c99?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=j50-eJKNwpsTYUJ6wYvb6NAqneBiAIJzXKS2-7OLITSsAy3u0yxmFIS0hF8HvfRREV0gR5Qns-RaEAdXYgX2ec0NhXgCJ4lV4-dtf7YJeR4F7OtI0mWKJ1GWZTs6MyZuZrjqo~ZFXcoSw8kBMWu-on8~x4wZMPpQoyGe9J7oL~DgxZurG5MGxYtzse3LEzZXN3miIRs7uq8IGNMIVg0LZOl5U0tN6FAFWGK7j9NS4lboQeW8G2sisKq1mgBl31H7moFI7KukUhwx--17~yQixcpOUWdipALvHyzZ598xm~39wIanN1g0UL2nPGl0s4jIsxJKAaChq4jtr2FTPBO0cg__"
    },
    {
      id: 5,
      name: "Rainbow Chicken Salad with Almond Honey Mustard Dressing",
      time: "30 Minutes",
      category: "Healthy",
      image: "https://s3-alpha-sig.figma.com/img/7a76/4b9c/5407edb219c5e9f8e502f796fb457d5a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=iypN4qIgMZqt-vWSh3t64HmURPW1cQ1tLqO0sXOu4OJdr6nNMwtU0yIPjwftrbsHkieWQ-BnBVjZsD0fREof5iLiellupvBooIT22pLeyhCxxVjWTLR7oaKVwHOc4jv-UGbVv5ygcHKsqnRkzafD1KGSaDx82YWHQhNG5mmF4LclMYNX1UUU2d9gPInqdBaVctsUEM8ZoEq26IuxxzLcpYbiXVfj3D5WSy7Egpoym~fckc8Qj4a5MstgeRghOz6-kSiyENDvGm-W6l19Pw2e7B9JGsgiWFOKfEK2MVeY7N0CiKyGDXyDZlR9xE0BQQqJbXz4QT2-jCjgDdiF67kg6w__"
    },
    {
      id: 6,
      name: "Barbeque Spicy Sandwiches with Chips",
      time: "30 Minutes",
      category: "Snack",
      image: "https://s3-alpha-sig.figma.com/img/6673/d9e2/6c13c0ea71b38a25d4146a33bc1c2493?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=PGuzxqAb-sV6F91RbKWsqxiHxnwJIIxTs1OFyYZVhaNfxd3hGWTZT83-0atO2CNTmbFDFry~dFValptCkEalRbhXDjrkjbhywae0jd3lOe-TYGDu3JaaSVUcT6z9fdT5caHcET9Keosx8xhRjxfmug3Z9Yc44OnDtSr7HdK2KdvtxAJ3PzeapdPu7oNBqAh~W5CmIZeXLYNn2IZsYVDSoGbjhQeMcq36X7z4eYM3bdbGR-~fomCX0qgnj7OBPJbMJxx252FwN4rrxwWeFTOpFdhEcEZYaJhEnSLg4aKSeDNvBj6lK4SbJlvxJ1CAxbXfXUi0OZGg3HQ-LeRzoz61Bg__"
    },
    {
      id: 7,
      name: "Firecracker Vegan Lettuce Wraps - Spicy!",
      time: "30 Minutes",
      category: "Seafood",
      image: "https://s3-alpha-sig.figma.com/img/d63b/ed8b/54a7062615139e095517d10e90afcb86?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=m~OORGhOPsIVHg2si4Zi9PTteTTzsz1RXvePyFo-L6x0AXSPvZ5MEud8jam7~2IqaJNZRxavpMRI-zSesw~3CBNc48s1ZJS9cjzIRDx3xLBEJ~u7XTHtHRlkqzk5DLSPfsZRt9FjUiUgfycyIQ6JM9RDUVljskVWeQJJdYOTe3ZTJcwYIgrMRt~dDLNf3-TqUlIid20VgQVNqO01LZNlhRAu4lgyxWREibppR4Ax7yS~4dPf-GvXvUmriRyTqxqohNXRTL~tMWtNP9-x8lCzPZM~JMsR9tghTGRxWtIOpM~JV52KRZTmmUW-TTz~VHVFOjurL7ZFlrzJQv5DcXQqpA__"
    },
    {
      id: 8,
      name: "Chicken Ramen Soup with Mushroom",
      time: "30 Minutes",
      category: "Japanese",
      image: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuARS2LQ387ZLvwPmWUtHAbCl0WdnkgUOWNusgs0vHuVSECUIDHXMTAHVXVgvffM1MOKYhsFnNrgtEVl-V7o43FUhnp0ZYAH5DSgCqgB1uhpTSI1VWg4uie4h4LMK5AsN5T0IF0hH87zZefRuDFqKlcHEIgqGJeFG5eppSbyNF2yrLkFZeDB9Yx9Fdveo886FGiMi6k76HkKDpc0VdMS4w0-7pCVoAnQKJtzlwMB1l32k~V6MQQRBePU2j7AOLOuzj6BSNnpwynFXE-OGHts5ZR0KThlxANIEbzW9AvIDCCeFJFoApfU7hRzDaNsM~pZEykW~nQEl9daLXXA0SayUw__"
    }
  ];
  
  export default DummyData;
  