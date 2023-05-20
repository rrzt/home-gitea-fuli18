var rule = {
    title:'裸露性交AV',
    host:'https://xjiaoav78.com:12121',
    // homeUrl:'/',
    url:'/home/index.html',
    searchUrl:'/kokso/page/fypage/wd/**.html',
    searchable:2,//是否启用全局搜索,
    quickSearch:0,//是否启用快速搜索,
    filterable:0,//是否启用分类筛选,
    headers:{//网站的请求头,完整支持所有的,常带ua和cookies
        'User-Agent':'MOBILE_UA',
        // "Cookie": "searchneed=ok"
    },
    class_name:'日韩无码&欧美无码&中文字幕&日韩有码&国产自拍&国产偷拍&卡通动漫&三级剧情',
    class_url:'2018-1&2019-1&2020-1&2021-1&2022-1&2023-1&2024-1&2025-1',
    play_parse:true,
    lazy:'',
    limit:6,
    推荐:'.movie-list-body;.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
    double:true, // 推荐内容是否双层定位
    一级:'.movie-list-body&&.movie-list-item;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级:{"title":"h1&&Text;.cr3&&Text","img":".poster&&img&&src","desc":".module-info-content&&.module-info-item:eq(-2)&&Text;.module-info-content&&.module-info-item:eq(-2)&&Text;.scroll-content&&Text;.title-block&&.starLink&&Text;.module-info-content&&.module-info-item:eq(2)&&.module-info-item-content&&Text","content":".detailsTxt&&Text","tabs":".swiper-wrapper&&a","lists":".play_list_box:eq(#id)&&.content_playlist li"},
    搜索:'.movie-list-body&&.movie-search-list;.movie-title&&Text;.movie-post-lazyload&&data-original;.module-item-note&&Text;a&&href',
}