document.addEventListener("DOMContentLoaded", function() {
    const artists = {
        sculpture: [
            {
                name: "<a href='/Sculpture/1.html'>เขียน ยิ้มศิริ</a>",
                image: "https://image.thepeople.co/uploads/images/md/2024/10/K6IvzlRIheUmhcTATGaa.webp?x-image-process=style/lg",
                description: "เขียน ยิ้มศิริ เป็นศิลปินด้านประติมากรรมที่สร้างสรรค์ผลงานที่มีเอกลักษณ์ และได้รับรางวัลศิลปินแห่งชาติ",
 
            },            
            {
                name: "<a href='/Sculpture/2.html'>ศาสตราจารย์ศิลป์ พีระศรี</a>",
                image: "https://www.finearts.go.th/uploads/tinymce/source/64/get/corrado_feroci.jpg",
                description: "เป็นคนวางรากฐานการเรียนสาขาศิลปะในไทย บิดาแห่งวงการศิลปะร่วมสมัยของไทยก็ว่าได้"
                
            },
            {
                name: "<a href='/Sculpture/3.html'>เฉลิมชัย โฆษิตพิพัฒน์</a>",
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Chalermchai_Kositpipat_%28June_2021%29_-_03.jpg/640px-Chalermchai_Kositpipat_%28June_2021%29_-_03.jpg",
                description: "จิตรกรไทยมีผลงานจิตรกรรมไทยหลายผลงาน เช่น ภาพจิตรกรรมไทยในอุโบสถวัดพุทธประทีป กรุงลอนดอน ประเทศอังกฤษ"
                
            },
            {
                name: "<a href='/Sculpture/4.html'>ศาสตราจารย์เกียรติคุณประหยัด พงษ์ดำ</a>",
                image: "https://p-u.popcdn.net/attachments/images/000/027/965/large/%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%AB%E0%B8%A2%E0%B8%B1%E0%B8%94_%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C%E0%B8%94%E0%B8%B3_.jpg?1598595027",
                description: "มีชื่อเสียงเรื่องภาพพิมพ์แกะไม้คนหนึ่งในเมืองไทย นับแต่ยุคหลังการเปลี่ยนแปลงทางการเมืองและสังคม"
                
            },
            {
                name: "<a href='/Sculpture/5.html'>ไข่มุกด์ ชูโต</a>",
                image: "https://today-obs.line-scdn.net/0h4Exn5zUfa2pFF0CzPCUUPX9BaAV2e3hpISE6aRl5NV49dHg6fHYgW2dHNlM4ICw0KyIkBWMecFs4cHw0KnUg/w644",
                description: "ศิลปินแห่งชาติปี 2531 เชี่ยวชาญด้านประติมากรรมไทยแบบดั้งเดิมและร่วมสมัย"
                
            },
            {
                name: "<a href='/Sculpture/6.html'>ทวี รัชนีกร</a>",
                image: "https://tiscoart.s3.ap-southeast-1.amazonaws.com/f/media/artist_images/d29a1f98e83975bc04f11a76dce24ad2229c238b7fa29c4bad8ed93da1e62de5.jpg",
                description: "ผลงานประติมากรรมที่สะท้อนสังคมและวัฒนธรรมไทย"
                
            }
        ],
        music: [
            {
                name: "<a href='/Music/1.html'>ครูเอื้อ สุนทรสนาน</a>",
                image: "https://mpics.mgronline.com/pics/Images/552000013863202.JPEG",
                description: "ครูเอื้อ สุนทรสนาน เป็นนักดนตรีและนักแต่งเพลงชื่อดัง ผู้ก่อตั้งวงสุนทราภรณ์"
            },
            {
                name: "<a href='/Music/2.html'>หลวงประดิษฐไพเราะ(ศร ศิลปบรรเลง)</a>",
                image: "https://mpics.mgronline.com/pics/Images/554000010131801.JPEG",
                description: "ปรมาจารย์ด้านดนตรีไทย ผู้แต่งเพลงไทยเดิมที่มีชื่อเสียงมากมาย"
            },
            {
                name: "<a href='/Music/3.html'>มนตรี ตราโมท</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlwzXe9szPo5o7wQMYxeEJKt327nQWggpcpA&s",
                description: "นักประพันธ์เพลงไทยเดิมที่มีผลงานเป็นอมตะ และเป็นครูดนตรีไทยคนสำคัญของประเทศ"
            },
            {
                name: "<a href='/Music/4.html'>สุกรี เจริญสุข</a>",
                image: "https://www.sarakadee.com/feature/2004/09/images/sukre02.jpg",
                description: "นักดนตรีไทยร่วมสมัย ที่ทำให้ดนตรีไทยเข้าถึงคนรุ่นใหม่มากขึ้น"
            },
            {
                name: "<a href='/Music/5.html'>พงษ์เทพ กระโดนชำนาญ</a>",
                image: "https://i.scdn.co/image/ab67616d0000b2736a2af7674b3d33ff82bec5cf",
                description: "นักแต่งเพลงและนักร้องเพลงเพื่อชีวิต ที่มีบทเพลงเป็นตำนาน"
            },
            {
                name: "<a href='/Music/6.html'>เทวาประสิทธิ์ พาทยโกศล</a>",
                image: "https://media.tarad.com/s/su-usedbook/img-lib/spd_a45651b6b7_b.jpg",
                description: "เป็นผู้แต่งเพลง ยิ้มสู้ และมีบทบาทสำคัญต่อวงการเพลงไทย"
            }
        ],
        
        painting: [
            {
                name: "<a href='/Painting/1.html'>จักรพันธุ์ โปษยกฤต</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS96kvEStrdqQH6vKYcjKVLp7UHENKwEc5xnA&s",
                description: "ศิลปินที่มีผลงานจิตรกรรมไทยประเพณีที่งดงามและมีเอกลักษณ์"
                
            },
            {
                name: "<a href='/Painting/2.html'>ช่วง มูลพินิจ</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLAGz3zKyZyPYJVmvGt0R-5cGm4yZSSXcPwg&s",
                description: " ศิลปินที่เชี่ยวชาญด้านจิตรกรรมไทยประยุกต์และภาพประกอบ"
                
            },
            {
                name: "<a href='/Painting/3.html'>ประเทือง เอมเจริญ</a>",
                image: "https://image.bangkokbiznews.com/uploads/images/contents/w1024/2022/03/JWEVsxRgPqPMm18EDfp8.webp?x-image-process=style/lg-webp",
                description: "ศิลปินแนวอิมเพรสชันนิสม์ไทย ผู้สร้างสรรค์งานศิลปะที่มีพลังและอารมณ์"
                
            },
            {
                name: "<a href='/Painting/4.html'>ปรีชา เถาทอง</a>",
                image: "https://storage-wp.thaipost.net/2024/08/artist.jpg",
                description: "ศิลปินที่มีความสามารถในการวาดภาพที่สะท้อนความเป็นไทยร่วมสมัย"
                
            },
            {
                name: "<a href='/Painting/5.html'>ปัญญา วิจินธนสาร</a>",
                image: "https://itp1.itopfile.com/ImageServer/z_itp_22032021drrq/0/0/theartsclubbangkok-pic34z-z1470166183892.jpg",
                description: "ศิลปินที่เชี่ยวชาญด้านจิตรกรรมไทยแบบร่วมสมัย"
                
            },
            {
                name: "<a href='/Painting/6.html'>อาจารย์พิชัย นิรันต์</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrBz9uEtGnrhxgI3NYCLNSjEaQmHYGyl9rwQ&s",
                description: "ศิลปินแห่งชาติสาขาทัศนศิลป์จิตรกรรม ได้รับยกย่องให้เป็นศิลปินแห่งชาติ จากสำนักงานคณะกรรมการวัฒนธรรมแห่งชาติ"
                
            }
        ],
        performance: [
            {
                name: "<a href='/Performance/1.html'>คุณหญิงแผ้ว สนิทวงศ์เสนี</a>",
                image: "https://f.ptcdn.info/511/030/000/1429461342-1046252085-o.jpg",
                description: "ผู้เชี่ยวชาญด้านนาฏศิลป์ไทย และมีบทบาทในการอนุรักษ์และเผยแพร่ศิลปะการแสดงไทย"
            },
            {
                name: "<a href='/Performance/2.html'>อาจารย์ลมุล ยมะคุปต์</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS8gmMlPiOfwlRS5gPhMl8ckBvzygYAu-JPw&s",
                description: "ศิลปินนาฏศิลป์ไทยที่มีผลงานโดดเด่น และเป็นครูผู้สอนนาฏศิลป์ไทย"
            },
            {
                name: "<a href='/Performance/3.html'>นายชินกร ไกรลาศ</a>",
                image: "https://www.khaosod.co.th/wpapp/uploads/2017/05/p0104190560p1.jpg",
                description: "ศิลปินเพลงพื้นบ้านที่มีผลงานโดดเด่น และเป็นผู้อนุรักษ์เพลงพื้นบ้านไทย"
            },
            {
                name: "<a href='/Performance/4.html'>เอกชัย ศรีวิชัย</a>",
                image: "https://s.isanook.com/jo/0/ud/482/2411545/e2.jpg?ip/crop/w670h402/q80/jpg",
                description: "ศิลปินหมอลำที่มีชื่อเสียง และมีบทบาทในการเผยแพร่ศิลปะการแสดงพื้นบ้าน"
            },
            {
                name: "<a href='/Performance/5.html'>นายสรพงษ์ ชาตรี</a>",
                image: "https://www.prachachat.net/wp-content/uploads/2022/03/%E0%B8%AA%E0%B8%A3%E0%B8%9E%E0%B8%87%E0%B8%A9%E0%B9%8C-%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%A3%E0%B8%B5-728x485.jpg",
                description: "นักแสดงที่มีผลงานโดดเด่นในวงการภาพยนตร์ไทย และได้รับการยกย่องเป็นศิลปินแห่งชาติ"
            },
            {
                name: "<a href='/Performance/6.html'>นางสาวจินตหรา สุขพัฒน์</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpdt_xJRBtxSUvAZ3K1NkUunqIxNaz0Gq7XQ&s",
                description: "นักแสดงหญิงที่มีผลงานโดดเด่น และได้รับการยกย่องในวงการบันเทิงไทย"
            }
        ],
        literature: [
            {
                name: "<a href='/Literature/1.html'>หม่อมราชวงศ์คึกฤทธิ์ ปราโมช</a>",
                image: "https://www.matichonweekly.com/wp-content/uploads/2017/09/%E0%B8%AB%E0%B8%99%E0%B9%89%E0%B8%B2%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%A5%E0%B8%B2%E0%B8%99-1936.jpg",
                description: "หม่อมราชวงศ์คึกฤทธิ์ ปราโมช เป็นนักเขียนและนักการเมืองที่มีผลงานวรรณกรรมสำคัญของไทย"
            },
            {
                name: "<a href='/Literature/2.html'>อาจารย์เนาวรัตน์ พงษ์ไพบูลย์</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVFfFbaC8JyWLUGSQr9bpUou3GCtUEZMiVSw&s",
                description: "กวีที่มีผลงานกวีนิพนธ์ที่สะท้อนสังคมและวัฒนธรรมไทย เช่น เพียงความเคลื่อนไหว"
            },
            {
                name: "<a href='/Literature/3.html'>อาจารย์สุจิตต์ วงษ์เทศ</a>",
                image: "https://www.matichon.co.th/wp-content/uploads/2017/01/14082571021408257133l.jpg",
                description: "นักเขียนและนักประวัติศาสตร์ที่มีผลงานวิจัยและบทความเกี่ยวกับประวัติศาสตร์และวัฒนธรรมไทย"
            },
            {
                name: "<a href='/Literature/4.html'>อาจารย์รงค์ วงษ์สวรรค์</a>",
                image: "https://www.sarakadee.com/feature/2009/04/images/rong_int02.jpg",
                description: "นักเขียนที่มีผลงานนวนิยายและสารคดีที่สะท้อนสังคมไทยอย่างลึกซึ้ง"
            },
            {
                name: "<a href='/Literature/5.html'>อาจารย์ประภัสสร เสวิกุล</a>",
                image: "https://image.posttoday.com/media/content/2015/09/18/1FD863B1D96E4A2BBF15A056AC630499.jpg?x-image-process=style/lg",
                description: "นักเขียนที่มีผลงานนวนิยายและเรื่องสั้นที่ได้รับการยอมรับ"
            },
            {
                name: "<a href='/Literature/6.html'>อาจารย์วาณิช จรุงกิจอนันต์</a>",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSyZKyDimt7zd2eOizvz-hTubrw2fmaH_QjrA&s",
                description: "นักเขียนที่มีผลงานนวนิยายและเรื่องสั้นที่สะท้อนชีวิตและสังคมไทย"
            }
        ]
    };

    function createArtistCard(artist) {
        return `
            <div class="col-lg-4 col-md-6 mb-4">
                <div class="card">
                    <img src="${artist.image}" class="card-img-top" alt="${artist.name}">
                    <div class="card-body">
                        <h5 class="card-title">${artist.name}</h5>
                        <p class="card-text">${artist.description}</p>
                    </div>
                </div>
            </div>
        `;
    }

    function showArtistDetails(name, image, description) {
        document.getElementById("artistName").textContent = name;
        document.getElementById("artistImage").src = image;
        document.getElementById("artistDescription").textContent = description;
        new bootstrap.Modal(document.getElementById("artistModal")).show();
    }

    for (const category in artists) {
        const container = document.getElementById(`${category}-list`);
        artists[category].forEach(artist => {
            container.innerHTML += createArtistCard(artist);
        });
    }
});