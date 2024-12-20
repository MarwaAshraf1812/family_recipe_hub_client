const BlogListData = [
    {
      id: 1,
      name: "Crochet Projects for Noodle Lovers",
      date: "12 November 2021",
      author : "Wade Warren",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim",
      image: "https://s3-alpha-sig.figma.com/img/ce11/6e29/44c629a3e4edbea08c307dbfbb67d899?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GuARS2LQ387ZLvwPmWUtHAbCl0WdnkgUOWNusgs0vHuVSECUIDHXMTAHVXVgvffM1MOKYhsFnNrgtEVl-V7o43FUhnp0ZYAH5DSgCqgB1uhpTSI1VWg4uie4h4LMK5AsN5T0IF0hH87zZefRuDFqKlcHEIgqGJeFG5eppSbyNF2yrLkFZeDB9Yx9Fdveo886FGiMi6k76HkKDpc0VdMS4w0-7pCVoAnQKJtzlwMB1l32k~V6MQQRBePU2j7AOLOuzj6BSNnpwynFXE-OGHts5ZR0KThlxANIEbzW9AvIDCCeFJFoApfU7hRzDaNsM~pZEykW~nQEl9daLXXA0SayUw__",
      authorImage: "https://s3-alpha-sig.figma.com/img/d47b/2cc5/f550dd4d6f62ddb2d08c6a9ed5691c3a?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=CMrqnWZh0CFkbH9zYpp4k9fhPD9bTZJxxmjXPlxr9EMU6wdVonWExbCBdGe9~fHBlyaEj8Z5Y7WZrFfgzirljk93IfdlhlrrUM4jZRnFpyaEQC2no600wf5vfFWJ0o7R9zMPLRE648EbHP0BAMCnei37n1YgIVzpj2RvfrQfnizavjRm61C38AmBXhn27wfjjXnLPVMA9Dt2ziQwxOF34-pJT1ljBbVjwwlhBuyiNZvKdTIOK2PNWJUUVd5kC6QS~yz90fwW19-ZPbF72uTvvpIWxWwVHbLx9Lw3BpcaNO~GGsREn2xC8-TJVf0j5o51u~FlPcCu-Wzjv-0AFBDWiA__"
    },
    {
      id: 2,
      name: "10 Vegetarian Recipes To Eat This Month",
      date: "12 November 2021",
      author : "Robert Fox",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim ",
      image: "https://s3-alpha-sig.figma.com/img/f699/5460/a4292927efc17ee09591649f7a1b7364?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kJ87miGHE3mDoPB6dDTDuE62H5gMKUonsChtA4vRVMVP7piJzSyIbU2qoduD-C4Fjn0P7ZSJh7Up8Rwu5InPTmDUNc-C~-cvK8Ts8I-z-jHbb2wFur99gsvZ3hyhu0U4vfztfT4NlAK8Moxzp6Aosjd2L-Zqdfjf3eqiATT7YnvPjdJkb79JBpwlltydqgsopdQTk9nsCCqvdWeburenUjrxHlgZ~EQOcXpHdQXVHmXQ4Zh6yL3nQN6FkMIXhSzMu~UQP1PLHJG-tlkRUNdLX8pB9keCtF6RrLjiNAyWjDUdRT6A9tQhA23g9ZNtr4qXFG4EeDztYsW6CLeZwXAHIw__",
      authorImage: "https://s3-alpha-sig.figma.com/img/f29f/c8ac/60f88d829be2b6014e31d49c3a39865b?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b~XoMuKb2~KR8hCqMvhdnVQ3u42m0n7WpWNTVKsSIfjvmkN9gFrjhgO3y2pVVGi-yhrE7daSf426mGIItU2cBpyG1Rh8pIq0SL2ofHCYVfZG0ksBG2A5ylN91Pk-6VV82K0EMvcsnqFSZDd7C~A~TBBJ0zDs2eBLQw-1wg33IOKGoj8EHZzWbtQWu0UsMpmFc4PQ7ellDFmK52Imzg-B4jO1hjN-OeADXQc8-NSqkjcbRl2XRSaKAunzEH0tKBhXnNVNljMF6GPy8a5aVkinKhDbSgoxlvP3QaBwRgwGepRVUhRHmMku5ZBSyRREqRy~m3Opw9AZ49ACI7zP-iehgQ__"
    },
    {
      id: 3,
      name: "Full Guide to Becoming a Professional Chef",
      date: "12 November 2021",
      author : "Dianne Russell",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim",
      image: "https://s3-alpha-sig.figma.com/img/fda7/b675/72edf0c22c3c10c3199734e1fb943b72?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Qem57n~UK5Ci9PhClnokA4gR0fWjlE8hL2Hd2ocRovU55JT3Zl7iqfTGp4yk7UQB~n2htvosExGowALDOSWy8k5BjtXM2dGACIqOdD0Ybrc6dhCul8wx40kisLOrJxM5-m0fsEh-qHu3VAKHWnAmrKYmHrPiybnwNlr~fSYpxkaFUpThI312lje1H3O35wQdGe4WebMSAYWPs2WRDLqZWHeYVal8ZI8ULqH3uCUVOwiRu6Pa5kt95EQX20O7Kk6ljRuLjBLLphCm6IfvXfAZod52VfXbbv7versUq05Wa-kARVWpoWDJsrJqZW-KkyTG-LnqmJp7XV2n348PkpTu8w__",
      authorImage: "https://s3-alpha-sig.figma.com/img/0430/4e97/1f429cc0f3282d0310257ed61402bc86?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cxtRn6WcwZJjyoOa32XSGORKR2CtJU-1nPtcZvUziP3TtPN-0eMQlOp3iqiOiqO-cCWXoJ3DWkl1MNJ7u6WWgAonXu24Nc3q3crNrMr7zaSrAm7S-KOQQhLertcCEn2j690u-SITysLt4-eY9GH-8dPonwEIgN8Oh77vr6hIVgq2rHVI5C-pIsvczrCeGZoxumtZ5~e1WKf31W6FXWmQr0X~JyTlGHU9XvijksFdSUsxV5xafngTe8QrFk-r2SdqsdWwlmAq1G2uXtSXYrX9Oi3-WNuvPjoV5voxcA1LVqPyJB2FYr833IakPPltrrQ5CEEWA6d13~ytRB-TplFaNQ__"
    },
    {
      id: 4,
      name: "Simple & Delicious Vegetarian Lasagna",
      date: "12 November 2021",
      author : "Leslie Alexander",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim",
      image: "https://s3-alpha-sig.figma.com/img/f94c/cf56/ed632c57bc587dbdac7f55f2088fd4ff?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DmiDEn3Kl8EWxzrdDO2XpNVaurnXEDdyZWZSruf8xxpJD6iPWUGdUUeFSOiMJhNpNNtNl6XsPRVY4e7DCc7FUZpydzB3JxpMork3J8QWmMxzU2pM7gAAe2H-jcdZCk~ucv4KjCCGCv~uR-5~bhLti9qiDMJ6hjEJ5ngGxKwmwAJjNxWVEv9QhExToyFkPiVdC4xloyZnVBPa6AbaTj1IpFEA7ux~R4-YYpzWCRLumcSojbuXDZnqkI4pBgGBKSdbW~MwUCUC2MFsswFx~~Zw1hcVhHUt0nZAWSgF4km4MnuX6HTaMgCvZtRyuXSt6aGKgVOebCr9AJtyvoJxfE8YSQ__",
      authorImage:"https://s3-alpha-sig.figma.com/img/441a/ee01/5b3d6cf5466213c79115be9598b7ff80?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VbBi9JmrgANwdivYqTaQhX7umkSKuC6810ibW3F8jFr7yreG-SCA98OEdiqeAfpgFkLVvLv1NiPpXzKj7XmkKNJmRiWyFLq0Ah1wV~OqrfDPc0ib9nQdRoX0hTRPxaxWa~unw8YjJi2N1z155Jv8lQywRYgESe-R709RJEkduzZ3AXhc8nI-N-Anz2TzJP29UhgltVzM4Aa7R6VMDwyPaRv82CjuKzrpy4Sprk7eiqfyCqH1SBPhQI6BQDUM12cOn0ct2bAqkAM1ZfL07GryjST0R~NujSNo9o4-YsFEbJnOsSxN3uQ7dRFAEvgAdqu9eR46UOoJXoO2SfL-PLaisg__"
    },
    {
      id: 5,
      name: "Plantain and Pinto Stew with Aji Verde",
      date: "12 November 2021",
      author : "Courtney Henry",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim",
      image: "https://s3-alpha-sig.figma.com/img/b073/f6b7/463ad3eadcaf16571ba4f3a0ff32b879?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=qz9GPpq5DKr5FYykStGFbnEFrK5QfO-pTtTsPT5GKJ5f776tlsCWfjnnqKk1UgpVp-rakZZgYYC1gn5eHGc~hbZnSJCZtRRZwQMN9TGMKsb8UKz71oID2kH0dGANMpqADl2x~SY-GliYzr7SGdDr2M2MlhHc8RU2htqmcMEdEFX~r2msLz2I2LzHNy11aYdij2rpupXjjl48cogGB0c382PxCDCC2~8pzg93ZTOP8aI7BBTkYEJ2ptG3hXuKW2CrwkRF03MTP6Xx2Ab~K6Ylw7aC3BCEH1ENfUOAmrXlOo01hm0T3QgMpKN8kGRfy~~JEw~aFjliHyZz13q8vBXGpA__",
      authorImage:"https://s3-alpha-sig.figma.com/img/d570/c0f1/17110267c7ebd167daa5cd7ec3acbb35?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=IndscU0HOyw1lvS7m8cooSGUAgWwWjwk-zd1-veymiCSmPequPZq~gXc3vrm-WWMWN~kY0izyImT0kf3b57gm4DoRLyWtgVVo3EEtJYEwAWjJTM1ofhjH7rOG3Z-ACzGltp5XuMenZaCPzDypWSvxXtpcgg8CcMFoSOi8rqaoc7xVR3-3yoMXjaGeNqSVyleqLvlAtJcsW9bzKUkYYGNJpxgOtg8M2YUwW0B9Ek8UghWqyBDr~5Zg8aaPnun-8R3y85CpzMC3owkjpoYd~~SY~einojJjHpKyDeyd7u15LXympU4~ZFtfaP~3XRRkliHEQEblgW-8HKJZcudj0BMGA__"
    },
    {
      id: 6,
      name: "We’re Hiring a Communications Assistant!",
      date: "12 November 2021",
      author : "Albert Flores",
      description: "Lorem ipsum dolor sit amet, consectetuipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqut enim incididunt ut  labore et dolore magna aliqut enim",
      image: "https://s3-alpha-sig.figma.com/img/d413/df5d/5ca2b1499887b1352b453e3a44d63b01?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=B0laerY~adXafEOdjk2BVw9dz7GzBtzIZ4EzBXwd-t2VYWcCJ9a67hpN8J482aNeOUA1QKDBd1smJkEnKz~Vtf-nydxAMa97YTkG3W1U7NeUR9BHZjEFRqi30ESgFI2sjOTXl0S~Yf~U9LABP3AqA3oZM3cO-3pVxv8ZnVRFwfQ2u0A0d4ROwQoB50aQTKAL0nE9v-vkV~ZKnUPjCVWJOOTJTtWf-8ncEGrnCMrm06eYPV-4js1tilZ-buHRoKwGT6GJb7ddaCVO62eD5d~NSQj-r2pxxZHRFWwMQyAU6oEhSgv0V0BKvch2ACKCf4uvEuaQMnoob4vHTCXSZQlbmA__",
      authorImage:"https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1735516800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=nt3-3OeMe~koJXxSKmyxu1~~oAYnwJVpj~bZ-kkGWUaFdqrPL8CmhDNP052XPmzil-Cc9eN05NPYtdJCp7TOmRKAeNCWcdhFf75zCjvYQGEMl0tDI~6gogkZcinG7x4nrMzp4MyCa7GfI2GGdW32pAT4h9NXk54evfTHpx-PwLdyIb6ir6zrsBBcPRkmczryQFnxz1nu3fn4cCczDM-NSFXRJ1oDiGdW5f6eyY4P8NaQD7UA4e3dpudJEJCM-p9rtEcbEYjFsGGqDZcORwBd5GSpklZq9oQMB419bdbl~sQd2Zkq1MrvQ90FcHG1cTD8SycNpVCC-b7uM82PJ~xVxQ__"
    },
  ];
  
  export default BlogListData;
  