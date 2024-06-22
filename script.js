(function(){
    var script = {
 "definitions": [{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 132.39,
   "backwardYaw": 158.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": -105.45,
   "backwardYaw": -157.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C"
  },
  {
   "yaw": -153.63,
   "backwardYaw": -135.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": -105.19,
   "backwardYaw": 72.73,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": 80.94,
   "backwardYaw": 149.69,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": 28.13,
   "backwardYaw": 110.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "distance": 1
  },
  {
   "yaw": -134.84,
   "backwardYaw": -117,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 175.57,
   "backwardYaw": -160.49,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113012_00_645_PureShot",
 "id": "panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
 "thumbnailUrl": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B7DB713C_B8E9_2ABD_41C1_4B1682223543",
  "this.overlay_B7D03076_B8E7_2ACD_41C6_AFF814AB0FDA",
  "this.overlay_B72F2BFA_B8E7_5DC5_41E3_FA978B524326",
  "this.overlay_B6483335_B919_2E4F_41E3_D5CA0AF240C2",
  "this.overlay_B684FCB2_B929_7A44_41B6_78008D3EEA7B",
  "this.overlay_B636BC30_B939_5A45_41B1_34C6F99C0CEC",
  "this.overlay_A975603F_B929_2ABB_41DF_189E6F9535FC",
  "this.overlay_2B338C0C_3B10_B6BF_41BF_C48B62089CA8",
  "this.overlay_35127543_3B10_56A9_41B9_507F98DB3F65"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C"
  },
  {
   "yaw": -47.78,
   "backwardYaw": -22.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E",
   "distance": 1
  },
  {
   "yaw": 128.24,
   "backwardYaw": 171.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696",
   "distance": 1
  },
  {
   "yaw": -65.27,
   "backwardYaw": 31.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB",
   "distance": 1
  },
  {
   "yaw": -25.16,
   "backwardYaw": 48.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
   "distance": 1
  },
  {
   "yaw": -90.66,
   "backwardYaw": 172.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
   "distance": 1
  },
  {
   "yaw": 8.51,
   "backwardYaw": -171.32,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114043_00_654_PureShot",
 "id": "panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
 "thumbnailUrl": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6D394F5_B91B_EBCF_41E4_2A8758E0B756",
  "this.overlay_A9BCAC7E_B91B_7ABD_41D4_96BA36FB08B2",
  "this.overlay_B6CE064F_B9E9_76DB_41E4_BA867CD5F1E4",
  "this.overlay_343B9D26_3B30_F6EA_41C2_20B7A68C3767",
  "this.overlay_2B2619DA_3B30_715A_41BA_E0A03828AF04",
  "this.overlay_17EFB648_3B81_F4A9_41A0_3C7580CBB274",
  "this.overlay_14747BF3_3BBE_337F_41A8_086C7D746764"
 ]
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_164545_00_673_PureShot",
 "id": "panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87",
 "thumbnailUrl": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2A816C69_3B30_D766_41BC_B32F766DCF95",
  "this.overlay_2F563B4E_3B31_D2BA_41BE_8D6963222327",
  "this.overlay_296364C3_3B31_B7AA_41C7_EE1790EB1419",
  "this.overlay_29F76C30_3B30_56E6_41B3_5B5090F38EE0",
  "this.overlay_2911DD5B_3B30_B15A_41BE_2BEDD992957A",
  "this.overlay_28B095D4_3B33_B1AE_41C7_E1F78C40C285",
  "this.overlay_29504368_3B30_F166_4197_871AAEEF39A9"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -4.43,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6186A28C_3B87_CDA9_41CA_34B90A561E75",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64363FBE_3B86_33E9_41AF_4949D9039EEA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 23.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65C77645_3B87_D49B_41C8_1D693B571AB7",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -67.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6000E422_3B87_D499_41BF_CDD90B6CE139",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 14.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B08C089_3B87_CDAB_41C9_66C37B4362B0",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 56.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67DF4470_3B87_D579_41A9_42BDC2B17F3F",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65892672_3B87_D579_41CA_7024AEB804DF",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 65.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6183B28C_3B87_CDA9_41CD_E3A860141662",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 154.84,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_613AE357_3B87_CCA7_41C0_715D6EE74622",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_654856B1_3B87_D5FB_41C3_62CD81A368C2",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -143.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60A663D4_3B87_D3B9_41BE_AE3AA9DF4D6A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 164.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64C8771E_3B87_D4A9_41C9_1E474B1686CD",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -128.81,
   "backwardYaw": 124.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "yaw": 108.88,
   "backwardYaw": 106.55,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648",
   "distance": 1
  },
  {
   "yaw": -157.4,
   "backwardYaw": -105.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": -88.03,
   "backwardYaw": 152.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 101.21,
   "backwardYaw": -123.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "distance": 1
  },
  {
   "yaw": -163.25,
   "backwardYaw": -106.76,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": -43.27,
   "backwardYaw": -158.77,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A"
  },
  {
   "yaw": -114.67,
   "backwardYaw": 137.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_112349_00_642_PureShot",
 "id": "panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
 "thumbnailUrl": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_A8BF7FA8_B8E9_5645_41E1_E9A46A2F2CD3",
  "this.overlay_B7D9063C_B8EB_76BD_41DC_92F732A548CA",
  "this.overlay_A8F37F48_B8EB_F6C5_419F_30BC9DEF6F68",
  "this.overlay_A9ACD883_B8EB_5A4B_41BA_5F2A1BDD78CE",
  "this.overlay_B6FBBCCE_B91A_DBDD_41E0_B4E958745F32",
  "this.overlay_B6CD9BC3_B92E_DDCB_41B5_DD3E4D84570A",
  "this.overlay_342DA113_3B10_6EAA_4180_BE644D10F6D7",
  "this.overlay_2B309EDD_3B10_B35E_41C7_7AF6B42F48AD",
  "this.overlay_3471FB60_3B10_7166_41CC_48DBB321115E",
  "this.overlay_350765D7_3B13_D1A9_41A5_43D91E68F554"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 120.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66D3855A_3B87_D4A9_41C6_8B7A2504E6F2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -30.81,
   "backwardYaw": 19.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": -8.71,
   "backwardYaw": -145.34,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87"
  },
  {
   "yaw": -21.29,
   "backwardYaw": 36.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1"
  },
  {
   "yaw": 8.79,
   "backwardYaw": -101.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_164111_00_671_PureShot",
 "id": "panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
 "thumbnailUrl": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2948CC02_3B30_D6AB_41AA_8CF01D3044B3",
  "this.overlay_29FB1DE8_3B30_7167_419E_626E6CB48874",
  "this.overlay_2921DC26_3B31_F6EB_41B0_3B884E1EBCED",
  "this.overlay_28EBF722_3B30_72EA_41C8_E7D90EFE8C68",
  "this.overlay_29D73067_3B30_EF69_41B7_261305DE7677",
  "this.overlay_2999E868_3B33_BF66_41C9_517B1806D4B3"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60EF7386_3B87_D399_419C_3FDDB8BD4452",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -74.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66C6A55A_3B87_D4A9_41CB_D3A23840B782",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.45,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_603FB451_3B87_D4BB_41BD_03DEA699C880",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -177.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60671403_3B87_D49F_41C0_A85B6CCF9E4E",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AEA2240B_B49B_F168_41C8_7408183525E1_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6110B347_3B87_CCA7_418C_C101739974CD",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60354451_3B87_D4BB_41CA_674696DD27CD",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -131.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64162F70_3B86_3379_41C8_49B8851BE598",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66C8E54B_3B87_D4AF_41C4_8A39E743A19E",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 98.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BCC9FDD_3B86_33AB_416D_87ADC9342B19",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B"
  },
  {
   "yaw": -114.82,
   "backwardYaw": 6.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": -9.41,
   "backwardYaw": 174.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  },
  {
   "yaw": -59.03,
   "backwardYaw": 52.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1"
  },
  {
   "yaw": -35.96,
   "backwardYaw": 76.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A"
  },
  {
   "yaw": -10.58,
   "backwardYaw": -14.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "yaw": -27.71,
   "backwardYaw": 87.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 19.91,
   "backwardYaw": -30.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114459_00_657_PureShot",
 "id": "panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
 "thumbnailUrl": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_37D4A8DF_3AF7_DF59_41C8_8C9912D8A2B0",
  "this.overlay_34B9AE31_3AF0_72E6_41B5_2C4DEFB34D5B",
  "this.overlay_37E6F745_3AF0_D2AE_41CB_B48CE59E2952",
  "this.overlay_3726402C_3AF0_EEFE_41A1_F63B3C257539",
  "this.overlay_34069531_3AF0_76E6_41AD_69CF0C519FCB",
  "this.overlay_371C7659_3AF1_B2A6_41B9_002788F1394A",
  "this.overlay_37A6499C_3AF1_D1DE_41B1_AB8FDD95630F",
  "this.overlay_374A6682_3AF0_B3AB_41C2_46D1C395A093",
  "this.overlay_37E8A69C_3AF0_D3DE_417B_C052A9E5CA02",
  "this.overlay_2BE9416D_3B30_717E_419A_F609F8170384",
  "this.overlay_3473A093_3B30_AFAA_41C3_D5A4192D4FBF",
  "this.overlay_3415C3AB_3B30_D1FA_41C0_54CA14FCCADA",
  "this.overlay_2BB3E264_3B30_B36E_41BC_D8BD18BE6EA5"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696"
  },
  {
   "yaw": -45.67,
   "backwardYaw": 120.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110"
  },
  {
   "yaw": 31.05,
   "backwardYaw": -65.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  },
  {
   "yaw": -43.81,
   "backwardYaw": -142.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162835_00_668_PureShot",
 "id": "panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB",
 "thumbnailUrl": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2A5ED194_3B10_D1AF_418C_41ECF76F6AF8",
  "this.overlay_296E3177_3B10_5169_41A9_8347DC27287C",
  "this.overlay_2986B1C4_3B10_51AE_41CD_17073FD034E3",
  "this.overlay_29EF5490_3B10_77A6_41BA_73FC19DF3C1E",
  "this.overlay_2932BE80_3B10_73A6_4184_951E80BC74A8",
  "this.overlay_294C45F8_3B11_B166_41CC_305C27E487C8",
  "this.overlay_29E61441_3B10_D6A6_4182_6AF3AB8F24A5",
  "this.overlay_2AE10480_3B17_F7A7_41BC_774E9DBC37D1",
  "this.overlay_2A21F2A7_3B10_73EA_41C8_D9F29517159C"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -177.6,
   "backwardYaw": 57.83,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
   "distance": 1
  },
  {
   "yaw": -112.81,
   "backwardYaw": -62.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
   "distance": 1
  },
  {
   "yaw": -85.81,
   "backwardYaw": 70.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
   "distance": 1
  },
  {
   "yaw": -38.3,
   "backwardYaw": 98.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162313_00_665_PureShot",
 "id": "panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
 "thumbnailUrl": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2B52B42B_3B11_B6FA_41C2_AAB52ED98A58",
  "this.overlay_2B66F2A7_3B10_53E9_41C2_6761838B273D",
  "this.overlay_2A1E7592_3B10_F1AA_41B9_22272A638330",
  "this.overlay_297AF536_3B10_56EB_41C9_BDE86329AB6E"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 46.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_657226E0_3B87_D599_415E_D275A4667900",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 149.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_676D44FD_3B87_D56B_41BA_A27F333B5F8B",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": 11.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6764B4FD_3B87_D56B_41C9_781E4271E771",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -102.03,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B6D1079_3B87_CD6B_41AC_ACD68DC093B9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 178.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_608433B5_3B87_D3F8_41A6_302A71793EBB",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_164754_00_674_PureShot",
 "id": "panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE",
 "thumbnailUrl": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2F8CA782_3B30_71AA_41C4_10AE56A5924B",
  "this.overlay_2D3E8EB4_3B31_F3EE_41C2_37000724B469",
  "this.overlay_29C9606A_3B30_AF7A_41C8_238650919349",
  "this.overlay_280ABAB6_3B30_73EB_41BE_D71885A3771B",
  "this.overlay_296C255A_3B33_D15A_41BE_96660D43FD7C"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -157.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B185099_3B87_CDA8_41C4_9738DD74BFD2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -72.14,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6189727C_3B87_CD69_41BA_9DE7CC6AB7E1",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -170.09,
   "backwardYaw": 48.04,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": 104.06,
   "backwardYaw": -81.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 105.23,
   "backwardYaw": -82.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 124.63,
   "backwardYaw": -128.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": -165.84,
   "backwardYaw": 70.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "distance": 1
  },
  {
   "yaw": 66.7,
   "backwardYaw": 128.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "yaw": 12.17,
   "backwardYaw": 100.14,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  },
  {
   "yaw": 158.04,
   "backwardYaw": 132.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": 107.86,
   "backwardYaw": -74.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "yaw": 140.45,
   "backwardYaw": 116.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": 87.81,
   "backwardYaw": -27.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": 80.11,
   "backwardYaw": -28.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113502_00_649_PureShot",
 "id": "panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
 "thumbnailUrl": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6237784_B93A_D64D_41B4_55DF17E71C7B",
  "this.overlay_A8E7DBDA_B93B_FDC5_41E1_6DB6C732A3D2",
  "this.overlay_A95A2667_B93B_36CB_41C9_6D42F4C71BD3",
  "this.overlay_B6BCD4D3_B92B_2BCB_41D6_4E742D8FF7C6",
  "this.overlay_2BEA418D_3B10_71BE_41B2_054641CA8E41",
  "this.overlay_35CA463F_3B13_D2DA_41C3_546CE15AC800",
  "this.overlay_2B0D4D29_3B13_B6E6_41CD_6F5609058C45",
  "this.overlay_3547B376_3B10_516A_41BB_07D0C117526F",
  "this.overlay_34F977D6_3B10_51AB_41A7_EFBAAB4A5670",
  "this.overlay_349A8CB6_3B11_F7EA_41AA_76D8CDC27F52",
  "this.overlay_3454C99D_3B10_51D9_41CC_82D9AB3DE961",
  "this.overlay_34A50DC2_3B10_B1AB_41CC_6CD871B38B68"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65A516A1_3B87_D59B_41B8_D5D140709DD0",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6191629C_3B87_CDA8_41C7_7C23D8722402",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -123.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61B712DA_3B87_CDA9_41C7_8E06C91CB244",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -161.31,
   "backwardYaw": -168.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": 152.81,
   "backwardYaw": -88.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": 97.01,
   "backwardYaw": -83.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": -51.89,
   "backwardYaw": 23.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "yaw": -114.98,
   "backwardYaw": 106.92,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": -84.95,
   "backwardYaw": 104.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "yaw": -62.6,
   "backwardYaw": 27.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  },
  {
   "yaw": -135.51,
   "backwardYaw": -153.63,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": 161.39,
   "backwardYaw": -112.9,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "distance": 1
  },
  {
   "yaw": -82.13,
   "backwardYaw": 105.23,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 52.24,
   "backwardYaw": -59.03,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": 3.56,
   "backwardYaw": -93.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113234_00_647_PureShot",
 "id": "panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
 "thumbnailUrl": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6DDF870_B91F_5AC5_41C9_F00CA1DD1B8A",
  "this.overlay_B65EA366_B91E_EECD_41E0_B41A93490808",
  "this.overlay_B61AFBFC_B919_FDBD_41E5_BFABEB93AB89",
  "this.overlay_B6114ECA_B919_37C5_41D1_FDBD3FACE7D3",
  "this.overlay_B63BFE15_B91B_564F_41DA_8378A1FAA849",
  "this.overlay_A9883A64_B919_7ECD_41DB_7339E70FB347",
  "this.overlay_AB1A05CC_B927_55DD_41E1_B22E3861C84E",
  "this.overlay_3463C50A_3B10_D6BB_41B8_B4943FBD03B3",
  "this.overlay_2BB721B1_3B10_B1E6_4149_130A82FF352A",
  "this.overlay_35DEC377_3B11_D16A_41B5_E2FD2DB00219",
  "this.overlay_35A76599_3B10_51A6_41C6_875C7F6E4799",
  "this.overlay_34A53A83_3B10_D3AA_4194_A8F86C78E599"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -9.31,
   "backwardYaw": -0.43,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
   "distance": 1
  },
  {
   "yaw": 15.72,
   "backwardYaw": 132.37,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
   "distance": 1
  },
  {
   "yaw": 57.83,
   "backwardYaw": -177.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
   "distance": 1
  },
  {
   "yaw": 39.36,
   "backwardYaw": 144.61,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_161736_00_661_PureShot",
 "id": "panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
 "thumbnailUrl": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2B3D6044_3B10_6EAE_41C7_B15AA4352486",
  "this.overlay_2B7A4726_3B11_B2EB_41B3_1F8D7A325236",
  "this.overlay_2A7211AC_3B10_B1FE_41C1_9A8BFF3911C1",
  "this.overlay_348A2AA6_3B10_F3EA_41A1_B9991566A1BA"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 6.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_601E2432_3B87_D4F8_41A5_0C784C392DB2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87"
  },
  {
   "yaw": 89.75,
   "backwardYaw": -133.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": 77.97,
   "backwardYaw": -113.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "distance": 1
  },
  {
   "yaw": -124.17,
   "backwardYaw": 9.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113830_00_652_PureShot",
 "id": "panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C",
 "thumbnailUrl": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B62D5222_B92B_2E45_41B5_5DBEAAD5537C",
  "this.overlay_A9FC8383_B92B_EE4B_41E1_91DBD257636D",
  "this.overlay_A9F4CA97_B926_DE4B_41AE_84AAF5741B47",
  "this.overlay_2B03F02D_3B30_6EFE_41CB_94209CC0193B"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 144.61,
   "backwardYaw": 39.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
   "distance": 1
  },
  {
   "yaw": -155.94,
   "backwardYaw": -84.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
   "distance": 1
  },
  {
   "yaw": -140.99,
   "backwardYaw": 39.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
   "distance": 1
  },
  {
   "yaw": 98.4,
   "backwardYaw": -38.3,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
   "distance": 1
  },
  {
   "yaw": -9.8,
   "backwardYaw": 2.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162431_00_666_PureShot",
 "id": "panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
 "thumbnailUrl": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2A9EA3C0_3B13_F1A7_4170_A4B4FDF318D0",
  "this.overlay_2A021CAB_3B10_D7FA_41C2_9F4547C5B776",
  "this.overlay_2B6E8846_3B11_BEAA_41CA_FA85AD8DB11E",
  "this.overlay_349E3A06_3B10_D2AA_41CB_E8E31D6C012B",
  "this.overlay_693FC632_3B87_F4F9_41CB_051C3D58C3C1"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -129.17,
   "backwardYaw": -146.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": -158.77,
   "backwardYaw": -43.27,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": -83.87,
   "backwardYaw": 97.01,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": -104.59,
   "backwardYaw": 118.35,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": -84.05,
   "backwardYaw": 102.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "yaw": -59.39,
   "backwardYaw": 8.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD"
  },
  {
   "yaw": -117,
   "backwardYaw": -134.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": -173.75,
   "backwardYaw": -93.87,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "distance": 1
  },
  {
   "yaw": -81.78,
   "backwardYaw": 104.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 6.61,
   "backwardYaw": -114.82,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": -43.93,
   "backwardYaw": -142.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113117_00_646_PureShot",
 "id": "panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
 "thumbnailUrl": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6020C66_B8E7_5ACD_41E5_D169FC0AAB4D",
  "this.overlay_B73BB468_B8E7_2AC5_41C2_D264522FB86F",
  "this.overlay_A9CF2BAB_B919_5E5B_41E0_2E77EA39B2FC",
  "this.overlay_B78F3BA4_B919_DE4C_41E1_67DCCAEB430E",
  "this.overlay_B6EDFBF9_B91F_3DC7_41D6_7B83E5263E54",
  "this.overlay_B6E1CFAF_B927_D65B_41E3_58438F544F64",
  "this.overlay_A97B6F56_B939_56CD_41DA_2FD24D48CD63",
  "this.overlay_2B465810_3B10_7EA6_41C3_695D568446DA",
  "this.overlay_3511BE9C_3B10_B3DE_41BF_1B4A9929049B",
  "this.overlay_2BB3E2FE_3B10_535A_41C4_57169ABADDEF",
  "this.overlay_341A3FF1_3B10_5169_41A2_22E52248E249",
  "this.overlay_34296B2F_3B13_D2FA_41B2_3BD5C1664C3D"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 51.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BD0100C_3B87_CCA9_41CC_5DDAAF52654D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "yaw": -145.34,
   "backwardYaw": -8.71,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
   "distance": 1
  },
  {
   "yaw": 8.58,
   "backwardYaw": -59.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 23.05,
   "backwardYaw": -51.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B"
  },
  {
   "yaw": 83.08,
   "backwardYaw": 4.91,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1"
  },
  {
   "yaw": 161.99,
   "backwardYaw": 7.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87"
  },
  {
   "yaw": 128.12,
   "backwardYaw": 66.7,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": -14.58,
   "backwardYaw": -10.58,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": -15.19,
   "backwardYaw": 0.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114632_00_659_PureShot",
 "id": "panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
 "thumbnailUrl": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_34CB33C2_3B30_F1AA_41AC_C860A3285584",
  "this.overlay_35D26A12_3B30_52AA_41C9_38D75FE6D0BE",
  "this.overlay_2B371D82_3B33_B1AA_41C1_A4B7FAFD0B74",
  "this.overlay_3475BFFC_3B30_B15E_41B6_F525A6842248",
  "this.overlay_2B002E6F_3B30_D379_41B8_6C0CC0BFCF91",
  "this.overlay_34395B03_3B30_52AA_41CC_34ECEF2931FB",
  "this.overlay_2B8B6489_3B31_F7A6_41C7_EC1B9344D2A3",
  "this.overlay_2BF9478B_3B30_51BA_41CA_379BD584D6A3",
  "this.overlay_2B5507E6_3B30_F16A_41AA_2FA0EA2C1887",
  "this.overlay_34F7E259_3B30_5359_4172_D3CD5C501D26",
  "this.overlay_34991A9B_3B30_53D9_41B4_C72BC4400FA2",
  "this.overlay_3450750E_3B30_56BA_41CD_23A6C015F918",
  "this.overlay_2BE6A941_3B30_5EA9_41C5_864ADB6EE8B6",
  "this.overlay_34F7C662_3B30_D36A_41AC_0D3B2E0C9525"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E"
  },
  {
   "yaw": 48.98,
   "backwardYaw": -25.16,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  },
  {
   "yaw": 120.7,
   "backwardYaw": -45.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648"
  },
  {
   "yaw": 123.13,
   "backwardYaw": 137.06,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
   "distance": 1
  },
  {
   "yaw": -62.95,
   "backwardYaw": -124.47,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162939_00_669_PureShot",
 "id": "panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
 "thumbnailUrl": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2A34885F_3B10_BF5A_4190_2D1AF027E529",
  "this.overlay_2841F71F_3B11_D2DA_41CC_208CDE1DE11C",
  "this.overlay_2F2A802F_3B11_AEF9_417C_3649F204CA86",
  "this.overlay_2A42218F_3B10_71BA_41CA_35327B3A00A9",
  "this.overlay_29D67C1D_3B10_F6D9_41C8_21FAB603E985",
  "this.overlay_28840170_3B10_5167_41C3_8A512E6EE884",
  "this.overlay_2A328C16_3B13_B6AA_41C3_9B76150DEF53"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61BBD2CA_3B87_CDA9_419F_3C5081B594A9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -109.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BED501C_3B87_CCA9_4191_CB3144232DE5",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -21.96,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6155F309_3B87_CCAB_41B0_76B59870814D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 39.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_615F9309_3B87_CCAB_41B5_C520DAE4C965",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 8.68,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_643B4F9F_3B86_33A7_418A_8835F99E8CD4",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B3A80A8_3B87_CDE9_41C1_2DA51799B3D5",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": -107.27,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6176D328_3B87_CCE9_41C2_E06828D4B35A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 19.51,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_612DB357_3B87_CCA7_41A0_3EBE0DEB5CB9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -30.31,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_610C5338_3B87_CCE9_4184_85A2B72B6FB6",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -140.05,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_605CC3F3_3B87_D37F_41CD_6E435C13B20F",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 45.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61EEF24D_3B87_CCAB_41C9_9E2A01504F23",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 128.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_619F029C_3B87_CDA8_41B0_9354B3B38DF6",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 22.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61631318_3B87_CCA9_41AD_CF11F9D3BE6A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -170.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_651A36EF_3B87_D567_41BE_5944D00E94FA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -156.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6704651C_3B87_D4A9_41AD_947929B8F127",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -103.21,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_674D74DD_3B87_D5AB_418E_C88BCF36F0E3",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -69.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61194338_3B87_CCE9_41B2_4FD96989E212",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165547_00_680_PureShot",
 "id": "panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714",
 "thumbnailUrl": "media/panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -152.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6724153B_3B87_D4EF_41C7_FE4A328746DA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165201_00_676_PureShot",
 "id": "panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180",
 "thumbnailUrl": "media/panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": 33.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5AC460B8_3B87_CDE9_41C8_A19D3F1B64FF",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5ACA30B8_3B87_CDE9_41B5_1C50ECFBB80A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 44.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6179B328_3B87_CCE9_41CA_F7ACF193F38B",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -82.99,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5AE630D7_3B87_CDA7_41B7_687DB36E9C27",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 78.32,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60B363D4_3B87_D3B9_41BE_2C0617C1EAE1",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 65.18,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61FC626D_3B87_CD68_41BA_D961D1036D5D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -71.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66E6757A_3B87_D768_41C0_86A60E5429FA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 158.71,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64FEF73E_3B87_D4E8_41BB_AA6FF8A12B49",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 55.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67F6848F_3B87_D5A7_41BB_0F57B1AF9D66",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 151.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B43106A_3B87_CD69_41AF_7FBB7742C869",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -115.74,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_653D470F_3B87_D4A8_41C2_9C1190CA8E09",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65C96635_3B87_D4FB_41AB_99CA2A54D888",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -42.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60CD5376_3B87_D379_4175_DD1A37C045B3",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64E1273E_3B87_D4E8_41C4_F27A7C3AE693",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -99.89,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64D7C72E_3B87_D4E9_41C6_31A112DD55D4",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 137.56,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66F3657A_3B87_D768_41C3_F0731645C952",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 142.07,
   "backwardYaw": 78.4,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": -133.4,
   "backwardYaw": 89.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C",
   "distance": 1
  },
  {
   "yaw": 149.69,
   "backwardYaw": 80.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": 106.92,
   "backwardYaw": -114.98,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 48.04,
   "backwardYaw": -170.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": -131.09,
   "backwardYaw": 79.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "distance": 1
  },
  {
   "yaw": 118.35,
   "backwardYaw": -104.59,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 89.64,
   "backwardYaw": -131.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113616_00_650_PureShot",
 "id": "panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
 "thumbnailUrl": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6D7AFB9_B939_5647_41E4_C4E1BF201A11",
  "this.overlay_A93EDFAF_B926_D65B_41DA_0F56FB43F112",
  "this.overlay_B6EC26EB_B927_37DB_41D3_2E2143262398",
  "this.overlay_B657A391_B927_2E47_41E6_A6015249A1B2",
  "this.overlay_B6D24A70_B926_DEC5_41E2_3B380794261F",
  "this.overlay_B78EC11B_B929_6A7B_41E1_F48D93BE7CF0",
  "this.overlay_35F43366_3B30_516A_41BC_83F997E3AE3A",
  "this.overlay_2BA9A39B_3B30_D1DA_41C6_B98634BBCA11"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -61.65,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61D2B21F_3B87_CCA8_41B4_05B52E2A40DF",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -77.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61D7C22E_3B87_CCE9_41AA_D11826AB3381",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66E8E56A_3B87_D769_4191_FB4D8164DD0F",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -37.93,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6457CED4_3B86_35B8_41B2_4BEA8B841A8D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -160.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6093F3B5_3B87_D3F8_41BF_1DC2D5B8031D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -27.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67C22461_3B87_D498_41C7_C5137354F78C",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "adjacentPanoramas": [
  {
   "yaw": -106.76,
   "backwardYaw": -163.25,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": 72.73,
   "backwardYaw": -105.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": -168.4,
   "backwardYaw": -161.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 116.89,
   "backwardYaw": 140.45,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 78.4,
   "backwardYaw": 142.07,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": -146.94,
   "backwardYaw": -129.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 148.93,
   "backwardYaw": 166.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  }
 ],
 "hfov": 360,
 "partial": false,
 "id": "panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
 "thumbnailUrl": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_t.jpg",
 "label": "IMG_20240310_112740_00_644_PureShot",
 "class": "Panorama",
 "pitch": 0,
 "hfovMax": 138,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "overlays": [
  "this.overlay_B7F257D7_B8EF_D5CB_41C2_347114757800",
  "this.overlay_B778168D_B8E9_565F_41A5_1A5F9FEA1D83",
  "this.overlay_A8FA297C_B8E9_DABD_41D3_1A1FE14EED78",
  "this.overlay_B64396EE_B919_57DD_41DB_B643D4C0A743",
  "this.overlay_B7CD2624_B929_564D_41D9_87A7D5A35FA6",
  "this.overlay_A97963E3_B93B_6DCB_41E4_81C25B09E702",
  "this.overlay_B6935648_B929_36C5_41B2_6F99B81F6B02"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_camera",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87"
  },
  {
   "yaw": -123.91,
   "backwardYaw": 101.21,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A"
  },
  {
   "yaw": -112.9,
   "backwardYaw": 161.39,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 98.74,
   "backwardYaw": 112.15,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "yaw": -93.87,
   "backwardYaw": -173.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 113.72,
   "backwardYaw": -53.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_112204_00_641_PureShot",
 "id": "panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
 "thumbnailUrl": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B7DC996B_B8E9_DADB_41C1_AA0A238DA5EB",
  "this.overlay_B70BC055_B8E9_2ACF_41DB_DD9098665142",
  "this.overlay_A81122D0_B8E9_2FC5_41CC_475D0FABFD5F",
  "this.overlay_B7C828BF_B8E9_5BBB_41E2_24316AC35F63",
  "this.overlay_A9F29C4C_B91B_DADD_41B2_36A436256723",
  "this.overlay_A9D2F954_B9E9_DACD_41B9_1E3E9FEAFF48",
  "this.overlay_B6061792_B9E9_7645_41E3_1CF2977E7645",
  "this.overlay_34CFC4F8_3B10_F767_41CC_8CB70AA0C607",
  "this.overlay_358AC672_3B10_B36A_41CC_265DD29B8E25",
  "this.overlay_352EC852_3B11_BEAA_41AC_7F63AE87465F"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -22.51,
   "backwardYaw": -47.78,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_163157_00_670_PureShot",
 "id": "panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E",
 "thumbnailUrl": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_29F49527_3B10_D6EA_41C2_16B9494D3B61"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": -101.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66862599_3B87_D7AB_41C1_A8247A23AEA0",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 2.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_656996D0_3B87_D5B9_41B5_0F139F0F58E7",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_665C35D7_3B87_D7A7_41C3_45F67856AAF9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -148.95,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_641B4F51_3B86_34B8_41BB_AAA7D58EDB5E",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5AD5F0C8_3B87_CDA8_41B1_F47ABBAA1944",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -175.09,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_660A65F7_3B87_D778_4167_9BF75086CB76",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 120.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_666745E7_3B87_D767_41B4_42068B4EAC90",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66076606_3B87_D499_41C7_A0B89F882289",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -47.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B87E03B_3B87_CCEF_41C1_7A7C5FCA8937",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61F6B26D_3B87_CD68_41BB_DE8E835E9134",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 24.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65EA6654_3B87_D4B9_419C_6F59114758DD",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.36,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61AE72BB_3B87_CDEF_4195_9A312C3DCCAB",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "class": "PlayList",
 "items": [
  {
   "media": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 0, 1)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_camera"
  },
  {
   "media": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 1, 2)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_camera"
  },
  {
   "media": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 2, 3)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_camera"
  },
  {
   "media": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 3, 4)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_camera"
  },
  {
   "media": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 4, 5)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_camera"
  },
  {
   "media": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 5, 6)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_camera"
  },
  {
   "media": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 6, 7)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_camera"
  },
  {
   "media": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 7, 8)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_camera"
  },
  {
   "media": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 8, 9)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_camera"
  },
  {
   "media": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 9, 10)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_camera"
  },
  {
   "media": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 10, 11)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_camera"
  },
  {
   "media": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 11, 12)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_camera"
  },
  {
   "media": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 12, 13)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_camera"
  },
  {
   "media": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 13, 14)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_camera"
  },
  {
   "media": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 14, 15)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_camera"
  },
  {
   "media": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 15, 16)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_camera"
  },
  {
   "media": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 16, 17)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_camera"
  },
  {
   "media": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 17, 18)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_camera"
  },
  {
   "media": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 18, 19)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_camera"
  },
  {
   "media": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 19, 20)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_camera"
  },
  {
   "media": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
   "start": "this.pauseGlobalAudiosWhilePlayItem(this.mainPlayList, 20)",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 20, 21)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_camera"
  },
  {
   "media": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 21, 22)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_camera"
  },
  {
   "media": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 22, 23)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_camera"
  },
  {
   "media": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 23, 24)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_camera"
  },
  {
   "media": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 24, 25)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_camera"
  },
  {
   "media": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 25, 26)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_camera"
  },
  {
   "media": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 26, 27)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_camera"
  },
  {
   "media": "this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 27, 28)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_camera"
  },
  {
   "media": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 28, 29)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_camera"
  },
  {
   "media": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 29, 30)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1_camera"
  },
  {
   "media": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 30, 31)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_camera"
  },
  {
   "media": "this.panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 31, 32)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_camera"
  },
  {
   "media": "this.panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 32, 33)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_camera"
  },
  {
   "media": "this.panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 33, 34)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ADB6FF7D_B49B_0FA8_41E1_489A9AD7A180_camera"
  },
  {
   "media": "this.panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 34, 35)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_camera"
  },
  {
   "media": "this.panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 35, 36)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_camera"
  },
  {
   "media": "this.panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 36, 37)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_camera"
  },
  {
   "media": "this.panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 37, 38)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_camera"
  },
  {
   "media": "this.panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 38, 39)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_camera"
  },
  {
   "media": "this.panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 39, 40)",
   "player": "this.MainViewerPanoramaPlayer",
   "camera": "this.panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_camera"
  },
  {
   "media": "this.panorama_B428D196_B8FA_EA4D_41B6_D5181820880D",
   "camera": "this.panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_camera",
   "class": "PanoramaPlayListItem",
   "begin": "this.setEndToItemIndex(this.mainPlayList, 40, 0)",
   "player": "this.MainViewerPanoramaPlayer",
   "end": "this.trigger('tourEnded')"
  }
 ],
 "id": "mainPlayList",
 "changing": "var event = arguments[0]; this.changePlayListWithSameSpot(event.source, event.data.nextSelectedIndex)"
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 128.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_667C95F7_3B87_D778_41B3_84F5FB2F6C7F",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.61,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_600B8422_3B87_D499_41BC_493DB041578E",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 94.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6146D2F9_3B87_CD6B_41C7_BC1E46E9631A",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6088A3A5_3B87_D39B_41C5_F094055FF12A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 89.34,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6783B49F_3B87_D5A7_41CB_1D2442F081D4",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 169.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66290616_3B87_D4B9_41B1_3740519F8E36",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240311_073822_00_685_PureShot",
 "id": "panorama_B428D196_B8FA_EA4D_41B6_D5181820880D",
 "thumbnailUrl": "media/panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_164434_00_672_PureShot",
 "id": "panorama_AEA2240B_B49B_F168_41C8_7408183525E1",
 "thumbnailUrl": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_2AB42111_3B30_AEA9_41B5_68A4C2F19AC9",
  "this.overlay_29D87452_3B30_F6AA_41CC_351B3EC5D0BF",
  "this.overlay_29592AEB_3B31_B379_41C7_8117F580E473",
  "this.overlay_2F70D500_3B30_76A7_41C0_91090E443B54",
  "this.overlay_2A90028E_3B30_F3BA_41C0_A7F1038A1883",
  "this.overlay_28DA7DFA_3B30_515B_41AE_E062471EFBD8",
  "this.overlay_294E9497_3B30_77AA_4195_971C0B204951"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -66.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_659C7682_3B87_D599_41C3_FD897382B70B",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165745_00_681_PureShot",
 "id": "panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2",
 "thumbnailUrl": "media/panorama_B683432C_B8F9_6E5E_41D5_14CAE92021C2_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 96.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_670F850C_3B87_D4A9_41C3_CB652B34E306",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": -63.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BA1104B_3B87_CCA8_41C6_970847CE81C1",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 18.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64424EA5_3B86_359B_41A9_49AD1C108141",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -81.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66892589_3B87_D7AB_41BB_26FCE92C5E06",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.77,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6728F52C_3B87_D4E8_4183_4641A5FEB34D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -140.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_604853E4_3B87_D398_41BF_010EB22FE83E",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6517F6FF_3B87_D567_41B3_2CCC4226DB99",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -127.76,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67B094CE_3B87_D5A9_4196_7779573DC092",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ADB5D911_B49D_1378_41D4_7C154DBF9714_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B428D196_B8FA_EA4D_41B6_D5181820880D_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 21.23,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67E3C480_3B87_D599_41C9_94DD6D18F136",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -79.86,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BF6E03B_3B87_CCEF_41CC_7331260D4B41",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165317_00_678_PureShot",
 "id": "panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F",
 "thumbnailUrl": "media/panorama_AC4F5444_B49B_11DF_41C5_EC288CF5D61F_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -179.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66266626_3B87_D498_41C9_3F117449DBE2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 34.66,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60A8D3C4_3B87_D399_41CA_1D025BE26DB1",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 126.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_602B4441_3B87_D49B_41CC_28C9F0E2F106",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -5.85,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67BAF4BE_3B87_D5E9_419D_AFDE5235492A",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -18.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60E43395_3B87_D3BB_41B1_C444EAB0860F",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 106.55,
   "backwardYaw": 108.88,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": -24.1,
   "backwardYaw": -42.44,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
   "distance": 1
  },
  {
   "yaw": 112.15,
   "backwardYaw": 98.74,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114240_00_656_PureShot",
 "id": "panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648",
 "thumbnailUrl": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_A9650316_B9EB_6E4D_41BE_A693D63AAA97",
  "this.overlay_A9B50A64_B9EB_3ECD_41DE_639328A9ACED",
  "this.overlay_348D5519_3B30_B6A6_41C2_1E6D5CED3DF6"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -176.44,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_652186FF_3B87_D567_41CA_F72E408AFAC6",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 136.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65BCF6A1_3B87_D59B_41C4_B42F79AC6D8C",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -8.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6402EF31_3B86_34FB_41B0_0D6D47A5A498",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -99.06,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66AAE5A9_3B87_D7E8_41BB_7648B3D7AB94",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 100.14,
   "backwardYaw": 12.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "yaw": -101.68,
   "backwardYaw": 8.79,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
   "distance": 1
  },
  {
   "yaw": 7.66,
   "backwardYaw": 161.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "yaw": 56.65,
   "backwardYaw": -45.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "yaw": 27.63,
   "backwardYaw": -62.6,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A"
  },
  {
   "yaw": 7.36,
   "backwardYaw": -1.68,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114725_00_660_PureShot",
 "id": "panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
 "thumbnailUrl": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_3490807B_3B30_AF5A_41CA_F8DF553FD4C4",
  "this.overlay_2B0321D3_3B30_51AA_41AA_87B489848AE5",
  "this.overlay_2BFD3C74_3B30_D76F_41CB_9A2F1116E808",
  "this.overlay_295CE675_3B30_536E_41CD_2C7FA5CB8B11",
  "this.overlay_3476CF95_3B31_B1AE_41C5_CDB099521486",
  "this.overlay_2B6015CE_3B31_D1BA_4198_13451AC18F90",
  "this.overlay_2AD54D83_3B30_51AA_41AD_3AAEF376A7C7",
  "this.overlay_34621462_3B30_576A_41C4_A1BCFBA2D34C",
  "this.overlay_344C1ED4_3B30_D3AE_41C1_784886D7FD10",
  "this.overlay_2B1A50C4_3B30_AFAE_419F_DB348818E4C7",
  "this.overlay_2B3DB48E_3B0F_B7BA_41C2_11715672BAA1",
  "this.overlay_2BDD1876_3B10_5F6B_41AD_840E9829897C"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 152.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BB3405A_3B87_CCA9_41CD_0681F9A15B38",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 66.69,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6508D6EF_3B87_D567_41B5_E8F9FB774A30",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -171.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61EA623E_3B87_CCE9_41B7_7234534C49DC",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 2.7,
   "backwardYaw": -9.8,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "distance": 1
  },
  {
   "yaw": 171.37,
   "backwardYaw": 128.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  },
  {
   "yaw": -174.41,
   "backwardYaw": 128.24,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162614_00_667_PureShot",
 "id": "panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696",
 "thumbnailUrl": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_29F37749_3B10_52A6_41BF_D7EBA97FBCF4",
  "this.overlay_2944D3EA_3B10_717A_41AC_6409E6C24B08",
  "this.overlay_29FAA01A_3B11_EEDA_412C_FE19D2C9A9B8"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 117.01,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65F35670_3B87_D579_41AC_4B359ED4B2B9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 165.42,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_675A84DD_3B87_D5AB_41B0_F54FCBF11734",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -74.9,
   "backwardYaw": 107.86,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 137.41,
   "backwardYaw": -114.67,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B",
   "distance": 1
  },
  {
   "yaw": -160.49,
   "backwardYaw": 175.57,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "yaw": 64.26,
   "backwardYaw": -51.75,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
   "distance": 1
  },
  {
   "yaw": 104.23,
   "backwardYaw": -84.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "yaw": 166.6,
   "backwardYaw": 148.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841",
   "distance": 1
  },
  {
   "yaw": -131.46,
   "backwardYaw": 89.64,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": 76.79,
   "backwardYaw": -35.96,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": 102.75,
   "backwardYaw": -84.05,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": 4.91,
   "backwardYaw": 83.08,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "yaw": -45.84,
   "backwardYaw": 56.65,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113354_00_648_PureShot",
 "id": "panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
 "thumbnailUrl": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B607C877_B939_5ACB_41E4_41642B88E54E",
  "this.overlay_A9950667_B939_56CB_4174_81CB26F77C5C",
  "this.overlay_B67F60F1_B939_2BC7_41B3_E4B4EA7FBD55",
  "this.overlay_B6645134_B93F_2A4D_41E5_41833D0AB51F",
  "this.overlay_A9298498_B93E_EA45_41E5_4B376C77F50A",
  "this.overlay_A96C97B0_B92B_3645_41DF_87D4818CC87C",
  "this.overlay_2BF4AA9D_3B17_F3DE_41C5_CF27AB6AD3DF",
  "this.overlay_3532F77A_3B17_B15B_419B_CEA0C6DB4B60",
  "this.overlay_34E29B0D_3B10_52BE_41CC_1F35184093E2",
  "this.overlay_3423ABA8_3B10_D1E6_41B8_E124B5217679",
  "this.overlay_3533EF6B_3B10_517A_41B1_0B7A20C31F96",
  "this.overlay_34212F35_3B11_F2EE_41C1_41391625C5E6"
 ]
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696"
  },
  {
   "yaw": -53.99,
   "backwardYaw": 113.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B",
   "distance": 1
  },
  {
   "yaw": -42.44,
   "backwardYaw": -24.1,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648",
   "distance": 1
  },
  {
   "yaw": -171.32,
   "backwardYaw": 8.51,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  },
  {
   "yaw": -142.65,
   "backwardYaw": -43.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB",
   "distance": 1
  },
  {
   "yaw": -124.47,
   "backwardYaw": -62.95,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114124_00_655_PureShot",
 "id": "panorama_BE0B7525_B49D_1358_41D4_B6129A22747A",
 "thumbnailUrl": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6E0FFEF_B9EF_D5DB_41E1_7AB97CA35DC6",
  "this.overlay_A9EA7D6E_B9EF_5ADD_41D8_7BED964ADECC",
  "this.overlay_B68531FC_B9EB_2DBD_41E4_27700CDF0B75",
  "this.overlay_349B7E3C_3B37_F2DF_41BF_772E019FF2A4",
  "this.overlay_2B5E5817_3B30_5EAA_41C0_F73BEB33E87A",
  "this.overlay_172E1E00_3B82_7499_41C5_298E9D010A84"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 97.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BDB6FED_3B86_336B_41B5_362C1BFF49D3",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 50.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6462DEF3_3B86_357F_41BD_A328409DA71B",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 75.41,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_664735C8_3B87_D7A9_41C6_B5635FFAE816",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -167.83,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60D1B386_3B87_D399_41C8_BAFF94567177",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 132.37,
   "backwardYaw": 15.72,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
   "distance": 1
  },
  {
   "yaw": -156.89,
   "backwardYaw": -107.12,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
   "distance": 1
  },
  {
   "yaw": 70.45,
   "backwardYaw": -85.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
   "distance": 1
  },
  {
   "yaw": 39.95,
   "backwardYaw": -140.99,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_162134_00_663_PureShot",
 "id": "panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
 "thumbnailUrl": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_349575AA_3B11_B1FA_41C9_FF9EEB00D154",
  "this.overlay_2A325B7E_3B10_515A_41C2_64A7BFE16E1F",
  "this.overlay_34D09070_3B10_AF66_41A0_0FC585C60E71",
  "this.overlay_2A2A0A88_3B10_B3A6_41CB_FA368143ABAA"
 ]
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 171.29,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_666965E7_3B87_D767_41CA_369B3A0A8A95",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 48.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B5CE06A_3B87_CD69_41C5_2F44DB6CB423",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 157.49,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6477FF22_3B86_3499_4177_233507F85EE5",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_camera",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -113.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_661D8616_3B87_D4B9_41CC_819AF56074C9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -96.92,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61BEB2DA_3B87_CDA9_4195_2D5EC0BF9EE8",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 144.04,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61A172BB_3B87_CDEF_41CC_E9EDBFDFD081",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -56.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6799249F_3B87_D5A7_41B4_24112F100125",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 155.9,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65A9C692_3B87_D5B8_41B4_4B81B8BECB1B",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 105.1,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B91D04B_3B87_CCA8_41B0_EB03994DB31D",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -39.55,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64593EB4_3B86_35F9_41BA_848643D6EBEC",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 50.54,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6797F4AF_3B87_D5E8_41B0_024DBBAE1CEF",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 55.53,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60C4C376_3B87_D379_41CA_1CD5042207AA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 16.75,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64BF0E66_3B86_3499_41C8_1F9B332E99FD",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": -0.43,
   "backwardYaw": -9.31,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F",
   "distance": 1
  },
  {
   "yaw": -107.12,
   "backwardYaw": -156.89,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58",
   "distance": 1
  },
  {
   "yaw": -62.99,
   "backwardYaw": -112.81,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A",
   "distance": 1
  },
  {
   "yaw": -84.88,
   "backwardYaw": -155.94,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_161839_00_662_PureShot",
 "id": "panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE",
 "thumbnailUrl": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_34F30912_3B10_7EAB_4188_B41533AA0EC7",
  "this.overlay_2BFF57ED_3B13_F17E_41C0_7614349B364E",
  "this.overlay_2AFEBAF7_3B10_536A_41C0_292BCA1ECF51",
  "this.overlay_34C52D22_3B10_D6EA_41A6_C54624CB308F"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 65.02,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66A645B8_3B87_D7E9_4188_FBE12DAB25AE",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165107_00_675_PureShot",
 "id": "panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79",
 "thumbnailUrl": "media/panorama_ADAA0C7E_B49B_11A8_4188_80F847837D79_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 141.7,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_606A4403_3B87_D49F_41BC_6A419956C1C7",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -51.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5BE4F02B_3B87_CCEF_41B5_5D44C59CCCC8",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 72.88,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_614C72EA_3B87_CD68_41C6_93D3D39EE812",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -100.26,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_664945C8_3B87_D7A9_41CC_F6BE61B1C1D9",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": -31.07,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_619412AB_3B87_CDEF_41BA_D75038D913D8",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 170.2,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B2AC099_3B87_CDA8_418F_197504DCE1AE",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -75.94,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61F9725D_3B87_CCAB_41BF_563362FDD851",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 26.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6733E54B_3B87_D4AF_41BD_65BC33DBB861",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "yaw": 79.74,
   "backwardYaw": -131.09,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32",
   "distance": 1
  },
  {
   "yaw": -113.31,
   "backwardYaw": 77.97,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C",
   "distance": 1
  },
  {
   "yaw": 110.72,
   "backwardYaw": 28.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9"
  },
  {
   "yaw": 70.63,
   "backwardYaw": -165.84,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": -129.46,
   "backwardYaw": 22.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113704_00_651_PureShot",
 "id": "panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
 "thumbnailUrl": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B62D64CB_B92F_6BDB_41E2_FCF9C1C824D7",
  "this.overlay_A96248CC_B92F_3BDD_41E7_1AB847E67FAF",
  "this.overlay_A8163268_B929_2EC5_41E1_6BE51B63DC40",
  "this.overlay_B63CA9A5_B929_3A4F_41DF_E6A6ABB8AA1D",
  "this.overlay_A954A089_B92A_EA47_41B5_5977DBECD819",
  "this.overlay_2B7D038B_3B31_D1BA_41CC_03E6C76C9EF4",
  "this.overlay_34B76C2B_3B30_B6F9_417A_F987CA0FF482"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -92.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_675014ED_3B87_D56B_41C7_6A52022C5378",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -122.17,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65E62667_3B87_D498_41AA_541AB5130195",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32"
  },
  {
   "yaw": 9.45,
   "backwardYaw": -124.17,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C",
   "distance": 1
  },
  {
   "yaw": 172.89,
   "backwardYaw": -90.66,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6",
   "distance": 1
  },
  {
   "yaw": 137.06,
   "backwardYaw": 123.13,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7",
   "distance": 1
  },
  {
   "yaw": 22.26,
   "backwardYaw": -129.46,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB"
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_113947_00_653_PureShot",
 "id": "panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5",
 "thumbnailUrl": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_B6EB2B43_B919_FECB_41C7_4D4310310FA8",
  "this.overlay_A82DCE20_B91A_D644_41E5_D2850652A002",
  "this.overlay_B620D2A6_B919_6E4D_41DC_F958B22781BB",
  "this.overlay_3473A056_3B33_AEAA_41BF_0330C1DDB413",
  "this.overlay_3440AECA_3B30_53BA_41B4_84A965758EB1",
  "this.overlay_34D85266_3B30_536A_41CD_814F61553B61"
 ]
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165238_00_677_PureShot",
 "id": "panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB",
 "thumbnailUrl": "media/panorama_AC49D143_B49B_33D8_41CD_02F1D7B4DECB_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 67.19,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_65DCE645_3B87_D49B_41C4_0655DCA810E4",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -78.79,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_607ED412_3B87_D4B9_41C9_C01D8E7CBEAE",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165848_00_682_PureShot",
 "id": "panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3",
 "thumbnailUrl": "media/panorama_B4328755_B8F9_36CF_41C6_8A260DF8D1E3_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 114.73,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6484874D_3B87_D4AB_41A1_17E300A148F6",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "hfov": 128,
  "yaw": 73.24,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67D6F470_3B87_D579_41B3_92416029D40E",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "gyroscopeEnabled": true,
 "viewerArea": "this.MainViewer",
 "displayPlaybackBar": true,
 "class": "PanoramaPlayer",
 "touchControlMode": "drag_rotation",
 "id": "MainViewerPanoramaPlayer",
 "gyroscopeVerticalDraggingEnabled": true,
 "mouseControlMode": "drag_rotation"
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -172.64,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64DBD71E_3B87_D4A9_41B0_0E80ABEE8E87",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 179.57,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_654636B1_3B87_D5FB_41B1_C34454E1DCDF",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "hfovMax": 130,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_165458_00_679_PureShot",
 "id": "panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04",
 "thumbnailUrl": "media/panorama_ADB12739_B49C_FFA8_41BE_6E3A99605A04_t.jpg",
 "partial": false,
 "class": "Panorama",
 "pitch": 0
},
{
 "hfovMax": 130,
 "adjacentPanoramas": [
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B"
  },
  {
   "yaw": -142.99,
   "backwardYaw": -43.93,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A",
   "distance": 1
  },
  {
   "yaw": -93.21,
   "backwardYaw": 3.56,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE"
  },
  {
   "yaw": -51.75,
   "backwardYaw": 64.26,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9",
   "distance": 1
  },
  {
   "yaw": 0.96,
   "backwardYaw": -15.19,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AEA2240B_B49B_F168_41C8_7408183525E1"
  },
  {
   "yaw": -1.68,
   "backwardYaw": 7.36,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD",
   "distance": 1
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A"
  },
  {
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87"
  },
  {
   "yaw": -28.78,
   "backwardYaw": 80.11,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87",
   "distance": 1
  },
  {
   "yaw": 174.15,
   "backwardYaw": -9.41,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0",
   "distance": 1
  },
  {
   "yaw": 36.68,
   "backwardYaw": -21.29,
   "class": "AdjacentPanorama",
   "panorama": "this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87",
   "distance": 1
  }
 ],
 "partial": false,
 "frames": [
  {
   "front": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/f/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/f/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/f/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/f/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "top": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/u/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/u/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/u/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/u/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "class": "CubicPanoramaFrame",
   "back": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/b/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/b/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/b/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/b/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "bottom": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/d/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/d/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/d/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/d/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "left": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/l/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/l/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/l/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/l/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   },
   "thumbnailUrl": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_t.jpg",
   "right": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/r/0/{row}_{column}.jpg",
      "rowCount": 8,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 4096,
      "colCount": 8,
      "height": 4096
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/r/1/{row}_{column}.jpg",
      "rowCount": 4,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 2048,
      "colCount": 4,
      "height": 2048
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/r/2/{row}_{column}.jpg",
      "rowCount": 2,
      "class": "TiledImageResourceLevel",
      "tags": "ondemand",
      "width": 1024,
      "colCount": 2,
      "height": 1024
     },
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0/r/3/{row}_{column}.jpg",
      "rowCount": 1,
      "class": "TiledImageResourceLevel",
      "tags": [
       "ondemand",
       "preload"
      ],
      "width": 512,
      "colCount": 1,
      "height": 512
     }
    ]
   }
  }
 ],
 "vfov": 180,
 "hfov": 360,
 "label": "IMG_20240310_114548_00_658_PureShot",
 "id": "panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997",
 "thumbnailUrl": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_t.jpg",
 "class": "Panorama",
 "pitch": 0,
 "overlays": [
  "this.overlay_373448C5_3AF0_7FAE_41BA_7FE4DE45F20D",
  "this.overlay_343D66A9_3AF0_F3F9_41B7_1D54E1CA537E",
  "this.overlay_37085D74_3AF0_516F_41CA_92778D7081F5",
  "this.overlay_3714F04C_3AF0_AEBE_41CA_68E0A90EADB9",
  "this.overlay_35B31C65_3AF0_B76E_41CC_0806BC4B9A1B",
  "this.overlay_3793D288_3AF0_53A7_41C0_3BFD4416DE59",
  "this.overlay_34A3BBD7_3AF1_B1AA_41C0_E1809D876CB5",
  "this.overlay_340A8FA9_3AF0_71F9_41C4_9CF47602593F",
  "this.overlay_372CFDF4_3AF0_D16E_41BB_CEAD1A07447B",
  "this.overlay_347AD061_3B33_AF66_41A0_10BE27FD3977",
  "this.overlay_2BFA4FE8_3B30_5167_4166_A904D699707C",
  "this.overlay_2B428B4F_3B30_52BA_4191_9104D682F18B",
  "this.overlay_34F73DDA_3B31_D15A_41C1_5009753A5CC3",
  "this.overlay_2B8B14CF_3B30_57B9_41BD_80613528B9FB"
 ]
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 95.12,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6047C3F3_3B87_D37F_41CB_BC21998888A2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -164.28,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_614982EA_3B87_CD68_41C0_4D8A335504F3",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -173.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67ADE4BE_3B87_D5E9_41C6_47FA8A300681",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 74.81,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_64B58E86_3B86_3598_41AE_A7F5F47532FA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -73.08,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6711852C_3B87_D4E8_41C6_A34BF045C307",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -151.87,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_5B7EA089_3B87_CDAB_41C8_228D746C295F",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 9.91,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66BC05B8_3B87_D7E9_41CB_2B07A7B60348",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 134.33,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61304367_3B87_CC98_41B0_A5EC85F26A1C",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 132.22,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_663C0635_3B87_D4FB_41C6_0B53C7274004",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -90.25,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_66937599_3B87_D7AB_41C1_A146BB778786",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -55.37,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6022C441_3B87_D49B_41BA_1A80FE7C786C",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -7.11,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_642C1F8F_3B86_33A7_41A6_9E7D26D87982",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 134.16,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_60F143A5_3B87_D39B_4184_8B931A2A2DE2",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -81.6,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6586A682_3B87_D599_41BB_1C5CB9D8385B",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 91.97,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6771F50C_3B87_D4A9_41CD_6E329CC4AB53",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 1.6,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 1.6,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -35.39,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6566B6D0_3B87_D5B9_4177_2E5A19B466D6",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -59.3,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6488674D_3B87_D4AB_41CC_030CF17D4550",
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -42.59,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_67F9848F_3B87_D5A7_41B3_F72B9071FF08",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -47.63,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6553D6C1_3B87_D598_41C8_35E21DC78CA1",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 0,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_camera",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 37.35,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6497975D_3B87_D4AB_414D_A0C55D02D636",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 5,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": -13.4,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_6479CF03_3B86_3498_4180_21F4864D4DBA",
 "manualZoomSpeed": 0,
 "manualRotationSpeed": 200,
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 291.5,
    "yawSpeed": 2.66,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 34.25,
    "yawSpeed": 2.66,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "automaticZoomSpeed": 10,
 "class": "PanoramaCamera",
 "initialPosition": {
  "yaw": 86.13,
  "class": "PanoramaCameraPosition",
  "pitch": 0
 },
 "id": "camera_61E7224D_3B87_CCAB_41C6_7D7CB4338BBA",
 "initialSequence": {
  "restartMovementOnUserInteraction": false,
  "movements": [
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_in",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 323,
    "yawSpeed": 7.96,
    "easing": "linear",
    "class": "DistancePanoramaCameraMovement"
   },
   {
    "yawDelta": 18.5,
    "yawSpeed": 7.96,
    "easing": "cubic_out",
    "class": "DistancePanoramaCameraMovement"
   }
  ],
  "class": "PanoramaCameraSequence"
 }
},
{
 "playbackBarHeadOpacity": 1,
 "playbackBarBottom": 5,
 "toolTipShadowSpread": 0,
 "progressBorderColor": "#000000",
 "id": "MainViewer",
 "playbackBarProgressBackgroundColorDirection": "vertical",
 "progressBarBackgroundColor": [
  "#3399FF"
 ],
 "toolTipBorderColor": "#767676",
 "class": "ViewerArea",
 "minHeight": 50,
 "width": "100%",
 "toolTipOpacity": 1,
 "shadow": false,
 "progressBackgroundColor": [
  "#FFFFFF"
 ],
 "toolTipFontSize": "1.11vmin",
 "playbackBarBackgroundColor": [
  "#FFFFFF"
 ],
 "playbackBarHeadWidth": 6,
 "toolTipShadowBlurRadius": 3,
 "playbackBarHeight": 10,
 "playbackBarBackgroundColorDirection": "vertical",
 "toolTipTextShadowColor": "#000000",
 "playbackBarRight": 0,
 "playbackBarHeadShadowHorizontalLength": 0,
 "toolTipTextShadowBlurRadius": 3,
 "toolTipFontWeight": "normal",
 "playbackBarProgressBorderSize": 0,
 "toolTipPaddingBottom": 4,
 "paddingRight": 0,
 "progressBarBorderRadius": 0,
 "progressBarBorderSize": 0,
 "toolTipShadowColor": "#333333",
 "playbackBarProgressBorderRadius": 0,
 "playbackBarHeadShadowVerticalLength": 0,
 "playbackBarBorderRadius": 0,
 "height": "100%",
 "playbackBarHeadBorderRadius": 0,
 "playbackBarProgressBorderColor": "#000000",
 "playbackBarHeadBorderColor": "#000000",
 "toolTipFontStyle": "normal",
 "progressLeft": 0,
 "playbackBarHeadBorderSize": 0,
 "playbackBarProgressOpacity": 1,
 "toolTipShadowOpacity": 1,
 "playbackBarBorderSize": 0,
 "transitionMode": "blending",
 "toolTipShadowHorizontalLength": 0,
 "propagateClick": false,
 "toolTipTextShadowOpacity": 0,
 "toolTipFontFamily": "Arial",
 "toolTipShadowVerticalLength": 0,
 "vrPointerSelectionColor": "#FF6600",
 "playbackBarBackgroundOpacity": 1,
 "playbackBarHeadBackgroundColor": [
  "#111111",
  "#666666"
 ],
 "playbackBarHeadShadowColor": "#000000",
 "vrPointerSelectionTime": 2000,
 "progressRight": 0,
 "firstTransitionDuration": 0,
 "progressOpacity": 1,
 "progressBarBackgroundColorDirection": "vertical",
 "playbackBarHeadShadow": true,
 "progressBottom": 0,
 "toolTipBackgroundColor": "#F6F6F6",
 "toolTipFontColor": "#606060",
 "borderSize": 0,
 "playbackBarHeadBackgroundColorDirection": "vertical",
 "progressBackgroundOpacity": 1,
 "minWidth": 100,
 "playbackBarOpacity": 1,
 "progressHeight": 10,
 "playbackBarProgressBackgroundColor": [
  "#3399FF"
 ],
 "vrPointerColor": "#FFFFFF",
 "progressBarOpacity": 1,
 "playbackBarHeadShadowOpacity": 0.7,
 "paddingLeft": 0,
 "displayTooltipInTouchScreens": true,
 "playbackBarBorderColor": "#FFFFFF",
 "progressBorderSize": 0,
 "toolTipBorderSize": 1,
 "toolTipPaddingTop": 4,
 "toolTipPaddingLeft": 6,
 "progressBorderRadius": 0,
 "toolTipPaddingRight": 6,
 "toolTipDisplayTime": 600,
 "paddingTop": 0,
 "playbackBarLeft": 0,
 "progressBackgroundColorRatios": [
  0
 ],
 "playbackBarProgressBackgroundColorRatios": [
  0
 ],
 "toolTipBorderRadius": 3,
 "borderRadius": 0,
 "paddingBottom": 0,
 "playbackBarHeadHeight": 15,
 "playbackBarHeadBackgroundColorRatios": [
  0,
  1
 ],
 "playbackBarHeadShadowBlurRadius": 3,
 "progressBarBackgroundColorRatios": [
  0
 ],
 "progressBackgroundColorDirection": "vertical",
 "progressBarBorderColor": "#000000",
 "transitionDuration": 500,
 "data": {
  "name": "Main Viewer"
 }
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.73,
   "image": "this.AnimatedImageResource_AA610493_B9FB_2A4B_41D8_C9F9BDCB9F9D",
   "pitch": -43.71,
   "yaw": -105.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_6176D328_3B87_CCE9_41C2_E06828D4B35A); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7DB713C_B8E9_2ABD_41C1_4B1682223543",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.73,
   "yaw": -105.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -43.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.93,
   "image": "this.AnimatedImageResource_AA66B493_B9FB_2A4B_41DB_B249023019E7",
   "pitch": -21.72,
   "yaw": -105.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_61631318_3B87_CCA9_41AD_CF11F9D3BE6A); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7D03076_B8E7_2ACD_41C6_AFF814AB0FDA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.93,
   "yaw": -105.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.14,
   "image": "this.AnimatedImageResource_AA660493_B9FB_2A4B_41DD_159F88BFC1B3",
   "pitch": -17.14,
   "yaw": -134.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_6110B347_3B87_CCA7_418C_C101739974CD); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B72F2BFA_B8E7_5DC5_41E3_FA978B524326",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.14,
   "yaw": -134.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.38,
   "image": "this.AnimatedImageResource_AA666493_B9FB_2A4B_41D1_E68767AD1F62",
   "pitch": -22.75,
   "yaw": -153.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_6179B328_3B87_CCE9_41CA_F7ACF193F38B); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6483335_B919_2E4F_41E3_D5CA0AF240C2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.38,
   "yaw": -153.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.34,
   "image": "this.AnimatedImageResource_AA619493_B9FB_2A4B_41C5_9A0256DC4951",
   "pitch": -27.3,
   "yaw": 175.57,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_612DB357_3B87_CCA7_41A0_3EBE0DEB5CB9); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B684FCB2_B929_7A44_41B6_78008D3EEA7B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.34,
   "yaw": 175.57,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.72,
   "image": "this.AnimatedImageResource_AA61F493_B9FB_2A4B_41D4_5726A47388DD",
   "pitch": -20.46,
   "yaw": 132.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_6155F309_3B87_CCAB_41B0_76B59870814D); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B636BC30_B939_5A45_41B1_34C6F99C0CEC",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.72,
   "yaw": 132.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.62,
   "image": "this.AnimatedImageResource_AA615493_B9FB_2A4B_41E1_5E9C5DC3CD18",
   "pitch": -37.65,
   "yaw": 80.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_610C5338_3B87_CCE9_4184_85A2B72B6FB6); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A975603F_B929_2ABB_41DF_189E6F9535FC",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.62,
   "yaw": 80.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.65,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.85,
   "image": "this.AnimatedImageResource_24A686F6_3BF0_D36A_41B1_127EF6C54679",
   "pitch": -21.49,
   "yaw": 28.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110, this.camera_61194338_3B87_CCE9_41B2_4FD96989E212); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B338C0C_3B10_B6BF_41BF_C48B62089CA8",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.85,
   "yaw": 28.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.02,
   "image": "this.AnimatedImageResource_24A6F6F6_3BF0_D36A_41BA_FE25537046F2",
   "pitch": -13.87,
   "yaw": 7.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35127543_3B10_56A9_41B9_507F98DB3F65",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.02,
   "yaw": 7.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.75,
   "image": "this.AnimatedImageResource_AA68A4A3_B9FB_2A4B_41C8_181081B3B99F",
   "pitch": -31.55,
   "yaw": -90.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5, this.camera_642C1F8F_3B86_33A7_41A6_9E7D26D87982); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6D394F5_B91B_EBCF_41E4_2A8758E0B756",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.75,
   "yaw": -90.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.97,
   "image": "this.AnimatedImageResource_AA68F4A3_B9FB_2A4B_41DB_54D29638ADEA",
   "pitch": -21.39,
   "yaw": -89.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9BCAC7E_B91B_7ABD_41D4_96BA36FB08B2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.97,
   "yaw": -89.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.34,
   "image": "this.AnimatedImageResource_AA6824A3_B9FB_2A4B_41D5_55B3D8B36A33",
   "pitch": -33.94,
   "yaw": 8.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A, this.camera_643B4F9F_3B86_33A7_418A_8835F99E8CD4); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6CE064F_B9E9_76DB_41E4_BA867CD5F1E4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.34,
   "yaw": 8.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.94,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.41,
   "image": "this.AnimatedImageResource_2497E715_3BF0_D2AE_41BF_BCB811327539",
   "pitch": -31.36,
   "yaw": -65.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB, this.camera_641B4F51_3B86_34B8_41BB_AAA7D58EDB5E); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_343B9D26_3B30_F6EA_41C2_20B7A68C3767",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.41,
   "yaw": -65.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.96,
   "image": "this.AnimatedImageResource_24972715_3BF0_D2AE_41BA_DA41C2648892",
   "pitch": -28.09,
   "yaw": -25.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7, this.camera_64162F70_3B86_3379_41C8_49B8851BE598); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B2619DA_3B30_715A_41BA_E0A03828AF04",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.96,
   "yaw": -25.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.36,
   "image": "this.AnimatedImageResource_5196C860_3B8E_5C99_41C5_2B8E4BCDB56C",
   "pitch": -3.54,
   "yaw": 128.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696, this.camera_6402EF31_3B86_34FB_41B0_0D6D47A5A498); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_17EFB648_3B81_F4A9_41A0_3C7580CBB274",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.36,
   "yaw": 128.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.28,
   "image": "this.AnimatedImageResource_51964860_3B8E_5C99_417A_2173E1E5B888",
   "pitch": -29.68,
   "yaw": -47.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E, this.camera_6477FF22_3B86_3499_4177_233507F85EE5); this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_14747BF3_3BBE_337F_41A8_086C7D746764",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.28,
   "yaw": -47.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_6_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.71,
   "image": "this.AnimatedImageResource_248B1734_3BF0_D2EF_41AF_BF745C093437",
   "pitch": -4.66,
   "yaw": -36.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2A816C69_3B30_D766_41BC_B32F766DCF95",
 "maps": [
  {
   "hfov": 9.71,
   "yaw": -36.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_0_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.72,
   "image": "this.AnimatedImageResource_248B4734_3BF0_D2EF_41B8_7AA1F3A37F9B",
   "pitch": -4.3,
   "yaw": -3.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F563B4E_3B31_D2BA_41BE_8D6963222327",
 "maps": [
  {
   "hfov": 9.72,
   "yaw": -3.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_1_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.73,
   "image": "this.AnimatedImageResource_248A9734_3BF0_D2EF_41A9_C277193D50D8",
   "pitch": -3.02,
   "yaw": 23.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_296364C3_3B31_B7AA_41C7_EE1790EB1419",
 "maps": [
  {
   "hfov": 9.73,
   "yaw": 23.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_2_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.74,
   "image": "this.AnimatedImageResource_248AF734_3BF0_D2EF_41C9_154856D8F85F",
   "pitch": -1.93,
   "yaw": 41.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29F76C30_3B30_56E6_41B3_5B5090F38EE0",
 "maps": [
  {
   "hfov": 9.74,
   "yaw": 41.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -1.93,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_3_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.43,
   "image": "this.AnimatedImageResource_248A5734_3BF0_D2EF_41C0_3D1C9D0FDCB4",
   "pitch": -22.6,
   "yaw": 93.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2911DD5B_3B30_B15A_41BE_2BEDD992957A",
 "maps": [
  {
   "hfov": 20.43,
   "yaw": 93.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 11.13,
   "image": "this.AnimatedImageResource_1B759734_3BF0_D2EF_41C1_EA4120C1F36F",
   "pitch": -11.58,
   "yaw": 93.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28B095D4_3B33_B1AE_41C7_E1F78C40C285",
 "maps": [
  {
   "hfov": 11.13,
   "yaw": 93.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 13.32,
   "image": "this.AnimatedImageResource_1B75C734_3BF0_D2EF_41A0_E117517FCEDA",
   "pitch": -15.14,
   "yaw": -76.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29504368_3B30_F166_4197_871AAEEF39A9",
 "maps": [
  {
   "hfov": 13.32,
   "yaw": -76.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.72,
   "image": "this.AnimatedImageResource_AA656493_B9FB_2A4B_41E1_3B11BA538B59",
   "pitch": -33.72,
   "yaw": -163.25,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_67D6F470_3B87_D579_41B3_92416029D40E); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A8BF7FA8_B8E9_5645_41E1_E9A46A2F2CD3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.72,
   "yaw": -163.25,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.96,
   "image": "this.AnimatedImageResource_AA64C493_B9FB_2A4B_41E4_5A94A223AB6E",
   "pitch": -29.14,
   "yaw": -43.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_67E3C480_3B87_D599_41C9_94DD6D18F136); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7D9063C_B8EB_76BD_41DC_92F732A548CA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.96,
   "yaw": -43.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.29,
   "image": "this.AnimatedImageResource_AA64F493_B9FB_2A4B_41BC_10F8F2A478E2",
   "pitch": -26.39,
   "yaw": 101.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B, this.camera_67DF4470_3B87_D579_41A9_42BDC2B17F3F); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A8F37F48_B8EB_F6C5_419F_30BC9DEF6F68",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.29,
   "yaw": 101.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.39,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.91,
   "image": "this.AnimatedImageResource_AA643493_B9FB_2A4B_41E6_AC3F8700F4DE",
   "pitch": -18.99,
   "yaw": -157.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_60354451_3B87_D4BB_41CA_674696DD27CD); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9ACD883_B8EB_5A4B_41BA_5F2A1BDD78CE",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.91,
   "yaw": -157.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.02,
   "image": "this.AnimatedImageResource_AA679493_B9FB_2A4B_41DD_9CD79BC1087F",
   "pitch": -27.18,
   "yaw": -88.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_67C22461_3B87_D498_41C7_C5137354F78C); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6FBBCCE_B91A_DBDD_41E0_B4E958745F32",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.02,
   "yaw": -88.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.16,
   "image": "this.AnimatedImageResource_AA67C493_B9FB_2A4B_41DB_2D7F4AFFDAB8",
   "pitch": -20.73,
   "yaw": -114.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_67F9848F_3B87_D5A7_41B3_F72B9071FF08); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6CD9BC3_B92E_DDCB_41B5_DD3E4D84570A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.16,
   "yaw": -114.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.73,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.25,
   "image": "this.AnimatedImageResource_24BB36F6_3BF0_D36A_41B5_CDDA92377A15",
   "pitch": -14.2,
   "yaw": -128.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_6022C441_3B87_D49B_41BA_1A80FE7C786C); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_342DA113_3B10_6EAA_4180_BE644D10F6D7",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.25,
   "yaw": -128.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.96,
   "image": "this.AnimatedImageResource_24BA96F6_3BF0_D36A_41C1_6A43983AA930",
   "pitch": -14.32,
   "yaw": -150.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B309EDD_3B10_B35E_41C7_7AF6B42F48AD",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.96,
   "yaw": -150.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.79,
   "image": "this.AnimatedImageResource_24BAF6F6_3BF0_D36A_41BA_39AFAD9A33A9",
   "pitch": -14.14,
   "yaw": 108.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648, this.camera_603FB451_3B87_D4BB_41BD_03DEA699C880); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3471FB60_3B10_7166_41CC_48DBB321115E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.79,
   "yaw": 108.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_24BA26F6_3BF0_D36A_41C9_EEFA213D5527",
   "pitch": -4.7,
   "yaw": 125.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_350765D7_3B13_D1A9_41A5_43D91E68F554",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.33,
   "yaw": 125.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.61,
   "image": "this.AnimatedImageResource_2489D734_3BF0_D2EF_41CC_B912C4DAC182",
   "pitch": -21.34,
   "yaw": -61.2,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2948CC02_3B30_D6AB_41AA_8CF01D3044B3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.61,
   "yaw": -61.2,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.34,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_24890734_3BF0_D2EF_41CC_36C61FA7D9DB",
   "pitch": -2.19,
   "yaw": 8.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_60B363D4_3B87_D3B9_41BE_2C0617C1EAE1); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29FB1DE8_3B30_7167_419E_626E6CB48874",
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.91,
   "yaw": 8.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_1_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.9,
   "image": "this.AnimatedImageResource_248EC734_3BF0_D2EF_419F_017EB4D2ABFA",
   "pitch": -2.21,
   "yaw": -8.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_60A8D3C4_3B87_D399_41CA_1D025BE26DB1); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2921DC26_3B31_F6EB_41B0_3B884E1EBCED",
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.9,
   "yaw": -8.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_2_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.02,
   "image": "this.AnimatedImageResource_248E0734_3BF0_D2EF_4195_344A650CB9D2",
   "pitch": -2.15,
   "yaw": -21.29,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_60A663D4_3B87_D3B9_41BE_AE3AA9DF4D6A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28EBF722_3B30_72EA_41C8_E7D90EFE8C68",
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.02,
   "yaw": -21.29,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.15,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_3_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 3.79,
   "image": "this.AnimatedImageResource_248E7734_3BF0_D2EF_41B4_510282427AC9",
   "pitch": -2.02,
   "yaw": -30.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_6093F3B5_3B87_D3F8_41BF_1DC2D5B8031D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29D73067_3B30_EF69_41B7_261305DE7677",
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 3.79,
   "yaw": -30.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_4_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.32,
   "image": "this.AnimatedImageResource_51B5B87F_3B8E_5D67_41C4_17BAF371867C",
   "pitch": -11.06,
   "yaw": -51.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2999E868_3B33_BF66_41C9_517B1806D4B3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.32,
   "yaw": -51.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_51935860_3B8E_5C99_41C7_33104677DD0E",
   "pitch": -12.46,
   "yaw": -103.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37D4A8DF_3AF7_DF59_41C8_8C9912D8A2B0",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.54,
   "yaw": -103.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.45,
   "image": "this.AnimatedImageResource_2490C715_3BF0_D2AE_41C8_B574A06BC9C5",
   "pitch": -10.18,
   "yaw": -77.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34B9AE31_3AF0_72E6_41B5_2C4DEFB34D5B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.45,
   "yaw": -77.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.51,
   "image": "this.AnimatedImageResource_24900715_3BF0_D2AE_41BA_B54ACFCDF7CC",
   "pitch": -7.81,
   "yaw": -58.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37E6F745_3AF0_D2AE_41CB_B48CE59E2952",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.51,
   "yaw": -58.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.89,
   "image": "this.AnimatedImageResource_24904715_3BF0_D2AE_41C7_6F79944DC2D8",
   "pitch": -20.55,
   "yaw": -114.82,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_67ADE4BE_3B87_D5E9_41C6_47FA8A300681); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3726402C_3AF0_EEFE_41A1_F63B3C257539",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.89,
   "yaw": -114.82,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.55,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.19,
   "image": "this.AnimatedImageResource_2493A715_3BF0_D2AE_41CB_0276800DF4BD",
   "pitch": -17.48,
   "yaw": -59.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_67B094CE_3B87_D5A9_4196_7779573DC092); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34069531_3AF0_76E6_41AD_69CF0C519FCB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.19,
   "yaw": -59.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.48,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.46,
   "image": "this.AnimatedImageResource_2493F715_3BF0_D2AE_41C3_481043A75250",
   "pitch": -10.57,
   "yaw": -35.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_674D74DD_3B87_D5AB_418E_C88BCF36F0E3); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_371C7659_3AF1_B2A6_41B9_002788F1394A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.46,
   "yaw": -35.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.59,
   "image": "this.AnimatedImageResource_24932715_3BF0_D2AE_41C4_0F58C41EADAC",
   "pitch": -6.74,
   "yaw": -27.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_675014ED_3B87_D56B_41C7_6A52022C5378); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37A6499C_3AF1_D1DE_41B1_AB8FDD95630F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.59,
   "yaw": -27.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.32,
   "image": "this.AnimatedImageResource_24936715_3BF0_D2AE_41BC_BC6150C97CA2",
   "pitch": -32.21,
   "yaw": -9.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_67BAF4BE_3B87_D5E9_419D_AFDE5235492A); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_374A6682_3AF0_B3AB_41C2_46D1C395A093",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.32,
   "yaw": -9.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.3,
   "image": "this.AnimatedImageResource_2492D715_3BF0_D2AE_41C1_D8D9FCED5E76",
   "pitch": -16.44,
   "yaw": -10.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_675A84DD_3B87_D5AB_41B0_F54FCBF11734); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37E8A69C_3AF0_D3DE_417B_C052A9E5CA02",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.3,
   "yaw": -10.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.43,
   "image": "this.AnimatedImageResource_24920715_3BF0_D2AE_41C3_8034110C9AE2",
   "pitch": -13.12,
   "yaw": 19.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87, this.camera_676D44FD_3B87_D56B_41BA_A27F333B5F8B); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BE9416D_3B30_717E_419A_F609F8170384",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.43,
   "yaw": 19.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.12,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.44,
   "image": "this.AnimatedImageResource_24925715_3BF0_D2AE_41C4_83A9AAD0C19F",
   "pitch": -18.98,
   "yaw": 36.53,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3473A093_3B30_AFAA_41C3_D5A4192D4FBF",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": 36.53,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_249DB715_3BF0_D2AE_41C8_91DAD414A310",
   "pitch": -31.29,
   "yaw": 128.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3415C3AB_3B30_D1FA_41C0_54CA14FCCADA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.91,
   "yaw": 128.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.35,
   "image": "this.AnimatedImageResource_249DF715_3BF0_D2AE_41CB_BE497AE15413",
   "pitch": -28.37,
   "yaw": 55.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BB3E264_3B30_B36E_41BC_D8BD18BE6EA5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.35,
   "yaw": 55.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.37,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_12_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.39,
   "image": "this.AnimatedImageResource_51AC287F_3B8E_5D67_41CD_0A165C00E39B",
   "pitch": -27.3,
   "yaw": -43.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A, this.camera_6497975D_3B87_D4AB_414D_A0C55D02D636); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A5ED194_3B10_D1AF_418C_41ECF76F6AF8",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.39,
   "yaw": -43.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.96,
   "image": "this.AnimatedImageResource_51ABC87F_3B8E_5D67_41B1_923FDE5FBE01",
   "pitch": -38.33,
   "yaw": -45.67,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7, this.camera_6488674D_3B87_D4AB_41CC_030CF17D4550); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_296E3177_3B10_5169_41A9_8347DC27287C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.96,
   "yaw": -45.67,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.33,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.46,
   "image": "this.AnimatedImageResource_24822725_3BF0_D2EE_418A_A68DF7D5D353",
   "pitch": -32.82,
   "yaw": 31.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_6484874D_3B87_D4AB_41A1_17E300A148F6); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2986B1C4_3B10_51AE_41CD_17073FD034E3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.46,
   "yaw": 31.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 28.83,
   "image": "this.AnimatedImageResource_248D9725_3BF0_D2EE_41CB_FCAB91AB80B4",
   "pitch": -45.52,
   "yaw": 148.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29EF5490_3B10_77A6_41BA_73FC19DF3C1E",
 "maps": [
  {
   "hfov": 28.83,
   "yaw": 148.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -45.52,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.57,
   "image": "this.AnimatedImageResource_248DF725_3BF0_D2EE_41C5_F4CC19E3286C",
   "pitch": -2.32,
   "yaw": 47.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2932BE80_3B10_73A6_4184_951E80BC74A8",
 "data": {
  "label": "Arrow 06b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.57,
   "yaw": 47.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.32,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_4_0_0_map.gif",
      "width": 32,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.69,
   "image": "this.AnimatedImageResource_248D3725_3BF0_D2EE_41CC_C19D25273E61",
   "pitch": -48.08,
   "yaw": -123.42,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_294C45F8_3B11_B166_41CC_305C27E487C8",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.69,
   "yaw": -123.42,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.97,
   "image": "this.AnimatedImageResource_248D7725_3BF0_D2EE_41B6_7AFABB5F9CBB",
   "pitch": -28.2,
   "yaw": -176.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29E61441_3B10_D6A6_4182_6AF3AB8F24A5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.97,
   "yaw": -176.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.71,
   "image": "this.AnimatedImageResource_248CA725_3BF0_D2EE_41CC_4F53746ECB0E",
   "pitch": -21.58,
   "yaw": -165.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2AE10480_3B17_F7A7_41BC_774E9DBC37D1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.71,
   "yaw": -165.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.58,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.57,
   "image": "this.AnimatedImageResource_248CE725_3BF0_D2EE_41CC_7A01C26F67B8",
   "pitch": -14.68,
   "yaw": -152.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A21F2A7_3B10_73EA_41C8_D9F29517159C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.57,
   "yaw": -152.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.93,
   "image": "this.AnimatedImageResource_24864725_3BF0_D2EE_41BA_2E1BD60286D6",
   "pitch": -29.97,
   "yaw": -38.3,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E, this.camera_6586A682_3B87_D599_41BB_1C5CB9D8385B); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B52B42B_3B11_B6FA_41C2_AAB52ED98A58",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.93,
   "yaw": -38.3,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.1,
   "image": "this.AnimatedImageResource_24818725_3BF0_D2EE_41A5_3E76BB64E323",
   "pitch": -19.78,
   "yaw": -85.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58, this.camera_65892672_3B87_D579_41CA_7024AEB804DF); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B66F2A7_3B10_53E9_41C2_6761838B273D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.1,
   "yaw": -85.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.65,
   "image": "this.AnimatedImageResource_2481F725_3BF0_D2EE_41BC_C0D75F4B8D38",
   "pitch": -12.16,
   "yaw": -112.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE, this.camera_65F35670_3B87_D579_41AC_4B359ED4B2B9); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A1E7592_3B10_F1AA_41B9_22272A638330",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.65,
   "yaw": -112.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.68,
   "image": "this.AnimatedImageResource_24812725_3BF0_D2EE_41C5_2A71CC564395",
   "pitch": -11.26,
   "yaw": -177.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F, this.camera_65E62667_3B87_D498_41AA_541AB5130195); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_297AF536_3B10_56EB_41C9_BDE86329AB6E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.68,
   "yaw": -177.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 17.22,
   "image": "this.AnimatedImageResource_1B750734_3BF0_D2EF_41BC_196FE0241D0B",
   "pitch": -19.91,
   "yaw": -153.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F8CA782_3B30_71AA_41C4_10AE56A5924B",
 "maps": [
  {
   "hfov": 17.22,
   "yaw": -153.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.47,
   "image": "this.AnimatedImageResource_1B755734_3BF0_D2EF_41B6_3CE1341F0500",
   "pitch": -9.66,
   "yaw": -157.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2D3E8EB4_3B31_F3EE_41C2_37000724B469",
 "maps": [
  {
   "hfov": 9.47,
   "yaw": -157.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.66,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.49,
   "image": "this.AnimatedImageResource_1B74B734_3BF0_D2EF_41C0_689B6F6C9D28",
   "pitch": -8.26,
   "yaw": 137.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29C9606A_3B30_AF7A_41C8_238650919349",
 "maps": [
  {
   "hfov": 10.49,
   "yaw": 137.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_2_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 7.16,
   "image": "this.AnimatedImageResource_1B74E734_3BF0_D2EF_41C2_31AF3970992F",
   "pitch": -5.91,
   "yaw": 154.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_280ABAB6_3B30_73EB_41BE_D71885A3771B",
 "maps": [
  {
   "hfov": 7.16,
   "yaw": 154.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.91,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_3_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 01c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 4.81,
   "image": "this.AnimatedImageResource_1B742734_3BF0_D2EF_41CA_A80B48F59F38",
   "pitch": -4.29,
   "yaw": 166.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_296C255A_3B33_D15A_41BE_96660D43FD7C",
 "maps": [
  {
   "hfov": 4.81,
   "yaw": 166.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_4_0_0_map.gif",
      "width": 57,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.33,
   "image": "this.AnimatedImageResource_24AF1705_3BF0_D2A9_41BC_290696A2807C",
   "pitch": -17.23,
   "yaw": 105.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_5BDB6FED_3B86_336B_41B5_362C1BFF49D3); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6237784_B93A_D64D_41B4_55DF17E71C7B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.33,
   "yaw": 105.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.29,
   "image": "this.AnimatedImageResource_AA6C9493_B9FB_2A4B_41E5_4931FCB7C467",
   "pitch": -11.51,
   "yaw": 104.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_5BCC9FDD_3B86_33AB_416D_87ADC9342B19); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A8E7DBDA_B93B_FDC5_41E1_6DB6C732A3D2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.29,
   "yaw": 104.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.19,
   "image": "this.AnimatedImageResource_24AE9705_3BF0_D2A9_41BB_65A5D0C73C8A",
   "pitch": -15.5,
   "yaw": 140.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_5BA1104B_3B87_CCA8_41C6_970847CE81C1); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A95A2667_B93B_36CB_41C9_6D42F4C71BD3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.19,
   "yaw": 140.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.7,
   "image": "this.AnimatedImageResource_AA6C44A3_B9FB_2A4B_41E5_226164921933",
   "pitch": -26.21,
   "yaw": -170.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_64363FBE_3B86_33E9_41AF_4949D9039EEA); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6BCD4D3_B92B_2BCB_41D6_4E742D8FF7C6",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.7,
   "yaw": -170.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.59,
   "image": "this.AnimatedImageResource_24AEE705_3BF0_D2A9_41CB_3870051A4B87",
   "pitch": -21.92,
   "yaw": 158.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_5B87E03B_3B87_CCEF_41C1_7A7C5FCA8937); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BEA418D_3B10_71BE_41B2_054641CA8E41",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.59,
   "yaw": 158.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.86,
   "image": "this.AnimatedImageResource_24AE2705_3BF0_D2A9_4185_2E41EB02C039",
   "pitch": -12.1,
   "yaw": 124.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_5BD0100C_3B87_CCA9_41CC_5DDAAF52654D); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35CA463F_3B13_D2DA_41C3_546CE15AC800",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.86,
   "yaw": 124.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.15,
   "image": "this.AnimatedImageResource_24A99705_3BF0_D2A9_41CD_23D7771D8D57",
   "pitch": -16.64,
   "yaw": 87.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_5BB3405A_3B87_CCA9_41CD_0681F9A15B38); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B0D4D29_3B13_B6E6_41CD_6F5609058C45",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.15,
   "yaw": 87.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.64,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_24A9D705_3BF0_D2A9_41C1_27753C9311ED",
   "pitch": -22.57,
   "yaw": 80.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_5B43106A_3B87_CD69_41AF_7FBB7742C869); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3547B376_3B10_516A_41BB_07D0C117526F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 80.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.74,
   "image": "this.AnimatedImageResource_24A92705_3BF0_D2A9_41C4_BE9FA9CF657E",
   "pitch": -30.72,
   "yaw": 107.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_5B91D04B_3B87_CCA8_41B0_EB03994DB31D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34F977D6_3B10_51AB_41A7_EFBAAB4A5670",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.74,
   "yaw": 107.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.72,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.97,
   "image": "this.AnimatedImageResource_24A97705_3BF0_D2A9_41C1_B93F20DA31DB",
   "pitch": -35.43,
   "yaw": 66.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_5BE4F02B_3B87_CCEF_41B5_5D44C59CCCC8); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_349A8CB6_3B11_F7EA_41AA_76D8CDC27F52",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.97,
   "yaw": 66.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.41,
   "image": "this.AnimatedImageResource_24A8B705_3BF0_D2A9_41C0_B5DEE2D49F51",
   "pitch": -51.95,
   "yaw": 12.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_5BF6E03B_3B87_CCEF_41CC_7331260D4B41); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3454C99D_3B10_51D9_41CC_82D9AB3DE961",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.41,
   "yaw": 12.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.42,
   "image": "this.AnimatedImageResource_24A81705_3BF0_D2A9_41A0_5FA12DD9CAC3",
   "pitch": -13.98,
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110, this.camera_5BED501C_3B87_CCA9_4191_CB3144232DE5); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34A50DC2_3B10_B1AB_41CC_6CD871B38B68",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.42,
   "yaw": -165.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.82,
   "image": "this.AnimatedImageResource_AA636493_B9FB_2A4B_41D5_C7B50EFE9602",
   "pitch": -32.83,
   "yaw": 97.01,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_670F850C_3B87_D4A9_41C3_CB652B34E306); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6DDF870_B91F_5AC5_41C9_F00CA1DD1B8A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.82,
   "yaw": 97.01,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.45,
   "image": "this.AnimatedImageResource_AA62B493_B9FB_2A4B_41D8_8E32F66D532B",
   "pitch": -24.77,
   "yaw": 152.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_6771F50C_3B87_D4A9_41CD_6E329CC4AB53); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B65EA366_B91E_EECD_41E0_B41A93490808",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.45,
   "yaw": 152.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.33,
   "image": "this.AnimatedImageResource_AA62E493_B9FB_2A4B_41DD_4977A5B1F666",
   "pitch": -14.05,
   "yaw": 161.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B, this.camera_66C8E54B_3B87_D4AF_41C4_8A39E743A19E); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B61AFBFC_B919_FDBD_41E5_BFABEB93AB89",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.33,
   "yaw": 161.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.3,
   "image": "this.AnimatedImageResource_AA625493_B9FB_2A4B_41D6_474DA77BC0CC",
   "pitch": -26.17,
   "yaw": -161.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_6764B4FD_3B87_D56B_41C9_781E4271E771); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6114ECA_B919_37C5_41D1_FDBD3FACE7D3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.3,
   "yaw": -161.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.92,
   "image": "this.AnimatedImageResource_AA6D8493_B9FB_2A4B_41D5_4A869745299F",
   "pitch": -19.98,
   "yaw": -135.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_6733E54B_3B87_D4AF_41BD_65BC33DBB861); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B63BFE15_B91B_564F_41DA_8378A1FAA849",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.92,
   "yaw": -135.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.4,
   "image": "this.AnimatedImageResource_AA6DC493_B9FB_2A4B_41E1_921252D1FBC7",
   "pitch": -33.11,
   "yaw": -84.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_6728F52C_3B87_D4E8_4183_4641A5FEB34D); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9883A64_B919_7ECD_41DB_7339E70FB347",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.4,
   "yaw": -84.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.68,
   "image": "this.AnimatedImageResource_AA6D2493_B9FB_2A4B_41D0_0629650B3E95",
   "pitch": -19.06,
   "yaw": -82.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_66C6A55A_3B87_D4A9_41CB_D3A23840B782); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_AB1A05CC_B927_55DD_41E1_B22E3861C84E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.68,
   "yaw": -82.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.98,
   "image": "this.AnimatedImageResource_24A23705_3BF0_D2A9_41C4_929C70BDCCD2",
   "pitch": -37.92,
   "yaw": 52.24,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_66D3855A_3B87_D4A9_41C6_8B7A2504E6F2); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3463C50A_3B10_D6BB_41B8_B4943FBD03B3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.98,
   "yaw": 52.24,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13,
   "image": "this.AnimatedImageResource_24AD8705_3BF0_D2A9_41BD_804B81D4B919",
   "pitch": -48.22,
   "yaw": 3.56,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_66E8E56A_3B87_D769_4191_FB4D8164DD0F); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BB721B1_3B10_B1E6_4149_130A82FF352A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13,
   "yaw": 3.56,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.24,
   "image": "this.AnimatedImageResource_24ADF705_3BF0_D2A9_419E_C0D5D7672D3F",
   "pitch": -33.6,
   "yaw": -51.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_6704651C_3B87_D4A9_41AD_947929B8F127); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35DEC377_3B11_D16A_41B5_E2FD2DB00219",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.24,
   "yaw": -51.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.6,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.09,
   "image": "this.AnimatedImageResource_24AD3705_3BF0_D2A9_41C8_69195B1AF668",
   "pitch": -25.36,
   "yaw": -62.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_6724153B_3B87_D4EF_41C7_FE4A328746DA); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35A76599_3B10_51A6_41C6_875C7F6E4799",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.09,
   "yaw": -62.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.75,
   "image": "this.AnimatedImageResource_24AD6705_3BF0_D2A9_41A8_8D903C910F9E",
   "pitch": -17.44,
   "yaw": -114.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_6711852C_3B87_D4E8_41C6_A34BF045C307); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34A53A83_3B10_D3AA_4194_A8F86C78E599",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.75,
   "yaw": -114.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.35,
   "image": "this.AnimatedImageResource_24845725_3BF0_D2EE_41C8_27939EFD9BE3",
   "pitch": -11.24,
   "yaw": -9.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE, this.camera_654636B1_3B87_D5FB_41B1_C34454E1DCDF); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B3D6044_3B10_6EAE_41C7_B15AA4352486",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.35,
   "yaw": -9.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.92,
   "image": "this.AnimatedImageResource_24878725_3BF0_D2EE_41CB_AD08B8C5150B",
   "pitch": -10.96,
   "yaw": 15.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58, this.camera_6553D6C1_3B87_D598_41C8_35E21DC78CA1); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B7A4726_3B11_B2EB_41B3_1F8D7A325236",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.92,
   "yaw": 15.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.81,
   "image": "this.AnimatedImageResource_2487F725_3BF0_D2EE_41AA_8C8E517F8198",
   "pitch": -11.61,
   "yaw": 39.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E, this.camera_6566B6D0_3B87_D5B9_4177_2E5A19B466D6); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A7211AC_3B10_B1FE_41C1_9A8BFF3911C1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.81,
   "yaw": 39.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.39,
   "image": "this.AnimatedImageResource_24873725_3BF0_D2EE_41BC_E519F22C167E",
   "pitch": -13.5,
   "yaw": 57.83,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A, this.camera_656996D0_3B87_D5B9_41B5_0F139F0F58E7); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_348A2AA6_3B10_F3EA_41A1_B9991566A1BA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.39,
   "yaw": 57.83,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.5,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.78,
   "image": "this.AnimatedImageResource_AA6884A3_B9FB_2A4B_41CB_0C5A2C2D2E42",
   "pitch": -41.8,
   "yaw": 77.97,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110, this.camera_6508D6EF_3B87_D567_41B5_E8F9FB774A30); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B62D5222_B92B_2E45_41B5_5DBEAAD5537C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.78,
   "yaw": 77.97,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -41.8,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.5,
   "image": "this.AnimatedImageResource_AA68C4A3_B9FB_2A4B_41C8_58FB833340D2",
   "pitch": -15.02,
   "yaw": 89.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_657226E0_3B87_D599_415E_D275A4667900); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9FC8383_B92B_EE4B_41E1_91DBD257636D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.5,
   "yaw": 89.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.67,
   "image": "this.AnimatedImageResource_AA6824A3_B9FB_2A4B_41C4_66727FD5C1E3",
   "pitch": -17.09,
   "yaw": -124.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5, this.camera_651A36EF_3B87_D567_41BE_5944D00E94FA); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9F4CA97_B926_DE4B_41AE_84AAF5741B47",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.67,
   "yaw": -124.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.28,
   "image": "this.AnimatedImageResource_24941705_3BF0_D2A9_41BF_33291E7060DB",
   "pitch": -10.56,
   "yaw": 84.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B03F02D_3B30_6EFE_41CB_94209CC0193B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.28,
   "yaw": 84.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.74,
   "image": "this.AnimatedImageResource_24816725_3BF0_D2EE_41CD_68C37418C09A",
   "pitch": -21.99,
   "yaw": -140.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58, this.camera_605CC3F3_3B87_D37F_41CD_6E435C13B20F); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A9EA3C0_3B13_F1A7_4170_A4B4FDF318D0",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.74,
   "yaw": -140.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.41,
   "image": "this.AnimatedImageResource_2480D725_3BF0_D2EE_41B5_84977DA3116A",
   "pitch": -10.08,
   "yaw": -155.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE, this.camera_6047C3F3_3B87_D37F_41CB_BC21998888A2); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A021CAB_3B10_D7FA_41C2_9F4547C5B776",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.41,
   "yaw": -155.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.78,
   "image": "this.AnimatedImageResource_24803725_3BF0_D2EE_4183_F3B128CE222C",
   "pitch": -35.21,
   "yaw": -9.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696, this.camera_60671403_3B87_D49F_41C0_A85B6CCF9E4E); this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B6E8846_3B11_BEAA_41CA_FA85AD8DB11E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.78,
   "yaw": -9.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.21,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 35.11,
   "image": "this.AnimatedImageResource_24806725_3BF0_D2EE_41C2_B3748590D632",
   "pitch": -32.74,
   "yaw": 98.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A, this.camera_606A4403_3B87_D49F_41BC_6A419956C1C7); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_349E3A06_3B10_D2AA_41CB_E8E31D6C012B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 35.11,
   "yaw": 98.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.82,
   "image": "this.AnimatedImageResource_51AD987F_3B8E_5D67_41BA_9C3D8EB03D06",
   "pitch": -5.22,
   "yaw": 144.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F, this.camera_604853E4_3B87_D398_41BF_010EB22FE83E); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_693FC632_3B87_F4F9_41CB_051C3D58C3C1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.82,
   "yaw": 144.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.26,
   "image": "this.AnimatedImageResource_AA617493_B9FB_2A4B_41D7_F762332F690A",
   "pitch": -26.69,
   "yaw": -158.77,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_5AD5F0C8_3B87_CDA8_41B1_F47ABBAA1944); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6020C66_B8E7_5ACD_41E5_D169FC0AAB4D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.26,
   "yaw": -158.77,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.69,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.16,
   "image": "this.AnimatedImageResource_AA60C493_B9FB_2A4B_417A_D92F9F5D6954",
   "pitch": -19.81,
   "yaw": -129.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_5AC460B8_3B87_CDE9_41C8_A19D3F1B64FF); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B73BB468_B8E7_2AC5_41C2_D264522FB86F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.16,
   "yaw": -129.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.81,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.12,
   "image": "this.AnimatedImageResource_AA601493_B9FB_2A4B_4181_B22F71EA7F33",
   "pitch": -14.88,
   "yaw": -117,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_61EEF24D_3B87_CCAB_41C9_9E2A01504F23); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9CF2BAB_B919_5E5B_41E0_2E77EA39B2FC",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.12,
   "yaw": -117,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.12,
   "image": "this.AnimatedImageResource_AA604493_B9FB_2A4B_41DE_29D616B39A8A",
   "pitch": -16.67,
   "yaw": -173.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B, this.camera_61E7224D_3B87_CCAB_41C6_7D7CB4338BBA); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B78F3BA4_B919_DE4C_41E1_67DCCAEB430E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.12,
   "yaw": -173.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.25,
   "image": "this.AnimatedImageResource_AA607493_B9FB_2A4B_41E4_17C8B2797F7E",
   "pitch": -35.88,
   "yaw": -83.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_5AE630D7_3B87_CDA7_41B7_687DB36E9C27); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6EDFBF9_B91F_3DC7_41D6_7B83E5263E54",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.25,
   "yaw": -83.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.15,
   "image": "this.AnimatedImageResource_AA63E493_B9FB_2A4B_41C9_355592450FFA",
   "pitch": -20.19,
   "yaw": -84.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_61D7C22E_3B87_CCE9_41AA_D11826AB3381); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6E1CFAF_B927_D65B_41E3_58438F544F64",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.15,
   "yaw": -84.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.26,
   "image": "this.AnimatedImageResource_AA631493_B9FB_2A4B_41E5_812C031F5032",
   "pitch": -13.63,
   "yaw": -81.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_61F9725D_3B87_CCAB_41BF_563362FDD851); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A97B6F56_B939_56CD_41DA_2FD24D48CD63",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.26,
   "yaw": -81.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.26,
   "image": "this.AnimatedImageResource_24A176F6_3BF0_D36A_41AF_1A6716D92ED3",
   "pitch": -48.74,
   "yaw": 6.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_61FC626D_3B87_CD68_41BA_D961D1036D5D); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B465810_3B10_7EA6_41C3_695D568446DA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.26,
   "yaw": 6.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -48.74,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.31,
   "image": "this.AnimatedImageResource_24A0A6F6_3BF0_D36A_41C1_2284455441D6",
   "pitch": -37.78,
   "yaw": -43.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_61F6B26D_3B87_CD68_41BB_DE8E835E9134); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3511BE9C_3B10_B3DE_41BF_1B4A9929049B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.31,
   "yaw": -43.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.35,
   "image": "this.AnimatedImageResource_24A016F6_3BF0_D36A_41BB_E5EAA9D5902D",
   "pitch": -26.19,
   "yaw": -59.39,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_61EA623E_3B87_CCE9_41B7_7234534C49DC); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BB3E2FE_3B10_535A_41C4_57169ABADDEF",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.35,
   "yaw": -59.39,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.37,
   "image": "this.AnimatedImageResource_24A026F6_3BF0_D36A_41C4_4B78FE684213",
   "pitch": -19.08,
   "yaw": -67.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_341A3FF1_3B10_5169_41A2_22E52248E249",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.37,
   "yaw": -67.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.08,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.28,
   "image": "this.AnimatedImageResource_24A396F6_3BF0_D36A_41BF_BB75BA8039ED",
   "pitch": -12.71,
   "yaw": -104.59,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_61D2B21F_3B87_CCA8_41B4_05B52E2A40DF); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34296B2F_3B13_D2FA_41B2_3BD5C1664C3D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.28,
   "yaw": -104.59,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.71,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.03,
   "image": "this.AnimatedImageResource_249E5715_3BF0_D2AE_41B6_4EF391C30F59",
   "pitch": -7.47,
   "yaw": 54.03,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34CB33C2_3B30_F1AA_41AC_C860A3285584",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.03,
   "yaw": 54.03,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.02,
   "image": "this.AnimatedImageResource_249E6715_3BF0_D2AE_41A7_95F9258EEF38",
   "pitch": -7.87,
   "yaw": 76.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35D26A12_3B30_52AA_41C9_38D75FE6D0BE",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.02,
   "yaw": 76.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.33,
   "image": "this.AnimatedImageResource_2499D715_3BF0_D2AE_41AB_C3126C2B6C72",
   "pitch": -8.17,
   "yaw": 106.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B371D82_3B33_B1AA_41C1_A4B7FAFD0B74",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.33,
   "yaw": 106.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.24,
   "image": "this.AnimatedImageResource_24991715_3BF0_D2AE_41B4_81BB5295DF39",
   "pitch": -12.26,
   "yaw": 128.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_661D8616_3B87_D4B9_41CC_819AF56074C9); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3475BFFC_3B30_B15E_41B6_F525A6842248",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.24,
   "yaw": 128.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.74,
   "image": "this.AnimatedImageResource_24994715_3BF0_D2AE_41AF_15AC857DFA95",
   "pitch": -30.95,
   "yaw": 161.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_66076606_3B87_D499_41C7_A0B89F882289); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B002E6F_3B30_D379_41B8_6C0CC0BFCF91",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.74,
   "yaw": 161.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.29,
   "image": "this.AnimatedImageResource_24988715_3BF0_D2AE_41B8_F71226FFAB6B",
   "pitch": -18.61,
   "yaw": 83.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_660A65F7_3B87_D778_4167_9BF75086CB76); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34395B03_3B30_52AA_41CC_34ECEF2931FB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.29,
   "yaw": 83.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.61,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.36,
   "image": "this.AnimatedImageResource_2498F715_3BF0_D2AE_41C6_514423B78F48",
   "pitch": -11.83,
   "yaw": 23.05,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_667C95F7_3B87_D778_41B3_84F5FB2F6C7F); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B8B6489_3B31_F7A6_41C7_EC1B9344D2A3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.36,
   "yaw": 23.05,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.08,
   "image": "this.AnimatedImageResource_24983715_3BF0_D2DE_41C1_556657AB1BE7",
   "pitch": -8.57,
   "yaw": 8.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_666745E7_3B87_D767_41B4_42068B4EAC90); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BF9478B_3B30_51BA_41CA_379BD584D6A3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.08,
   "yaw": 8.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -8.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_24986725_3BF0_D2EE_41CC_7F7268DAF3EB",
   "pitch": -7.26,
   "yaw": 34.08,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B5507E6_3B30_F16A_41AA_2FA0EA2C1887",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": 34.08,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.56,
   "image": "this.AnimatedImageResource_249BB725_3BF0_D2EE_41C9_D61F38B8CD19",
   "pitch": -28.42,
   "yaw": -15.19,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_66266626_3B87_D498_41C9_3F117449DBE2); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34F7E259_3B30_5359_4172_D3CD5C501D26",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.56,
   "yaw": -15.19,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.44,
   "image": "this.AnimatedImageResource_249BF725_3BF0_D2EE_41CD_82C735E37E1D",
   "pitch": -17.23,
   "yaw": -14.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_66290616_3B87_D4B9_41B1_3740519F8E36); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34991A9B_3B30_53D9_41B4_C72BC4400FA2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.44,
   "yaw": -14.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.44,
   "image": "this.AnimatedImageResource_249B5725_3BF0_D2EE_41AF_27DFE378BB35",
   "pitch": -29.68,
   "yaw": -67.54,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3450750E_3B30_56BA_41CD_23A6C015F918",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.44,
   "yaw": -67.54,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.61,
   "image": "this.AnimatedImageResource_249AB725_3BF0_D2EE_41CB_8D03CF1844A3",
   "pitch": -27.95,
   "yaw": -108.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BE6A941_3B30_5EA9_41C5_864ADB6EE8B6",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.61,
   "yaw": -108.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_12_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.1,
   "image": "this.AnimatedImageResource_249AF725_3BF0_D2EE_41CA_F85E62730B9B",
   "pitch": -22.42,
   "yaw": -145.34,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87, this.camera_666965E7_3B87_D767_41CA_369B3A0A8A95); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34F7C662_3B30_D36A_41AC_0D3B2E0C9525",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.1,
   "yaw": -145.34,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_13_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 26.1,
   "image": "this.AnimatedImageResource_248C2725_3BF0_D2EE_4192_0A8593028855",
   "pitch": -51.29,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A, this.camera_60C4C376_3B87_D379_41CA_1CD5042207AA); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A34885F_3B10_BF5A_4190_2D1AF027E529",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 26.1,
   "yaw": -62.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -51.29,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 22.48,
   "image": "this.AnimatedImageResource_248F9725_3BF0_D2EE_41C2_938D23D1FFFE",
   "pitch": -30.57,
   "yaw": 48.98,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_613AE357_3B87_CCA7_41C0_715D6EE74622); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2841F71F_3B11_D2DA_41CC_208CDE1DE11C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 22.48,
   "yaw": 48.98,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 20.82,
   "image": "this.AnimatedImageResource_248FF725_3BF0_D2EE_41AE_335F494F37DD",
   "pitch": -37.13,
   "yaw": 120.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB, this.camera_61304367_3B87_CC98_41B0_A5EC85F26A1C); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2F2A802F_3B11_AEF9_417C_3649F204CA86",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 20.82,
   "yaw": 120.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.83,
   "image": "this.AnimatedImageResource_248F2725_3BF0_D2EE_41CA_270CCCB2FDE6",
   "pitch": -24.54,
   "yaw": 123.13,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5, this.camera_60CD5376_3B87_D379_4175_DD1A37C045B3); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A42218F_3B10_71BA_41CA_35327B3A00A9",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.83,
   "yaw": 123.13,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.3,
   "image": "this.AnimatedImageResource_248E8725_3BF0_D2EE_41CD_B296CFE39D17",
   "pitch": -32.38,
   "yaw": -94.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29D67C1D_3B10_F6D9_41C8_21FAB603E985",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.3,
   "yaw": -94.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -32.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.2,
   "image": "this.AnimatedImageResource_248EC725_3BF0_D2EE_41A6_21B80A0D9978",
   "pitch": -19.86,
   "yaw": -125.71,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_28840170_3B10_5167_41C3_8A512E6EE884",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.2,
   "yaw": -125.71,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.88,
   "image": "this.AnimatedImageResource_248E3734_3BF0_D2EF_41C7_0B777F3FA6F9",
   "pitch": -46.67,
   "yaw": -168.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 50
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 27)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A328C16_3B13_B6AA_41C3_9B76150DEF53",
 "data": {
  "label": "Arrow 06a Right-Up"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.88,
   "yaw": -168.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -46.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_6_0_0_map.gif",
      "width": 29,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.59,
   "image": "this.AnimatedImageResource_AA6C74A3_B9FB_2A4B_41A6_6BD53B9A5DE4",
   "pitch": -27.35,
   "yaw": 48.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_66BC05B8_3B87_D7E9_41CB_2B07A7B60348); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6D7AFB9_B939_5647_41E4_C4E1BF201A11",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.59,
   "yaw": 48.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -27.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.11,
   "image": "this.AnimatedImageResource_AA6FC4A3_B9FB_2A4B_41D1_E8C04498CFC9",
   "pitch": -21.46,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_665C35D7_3B87_D7A7_41C3_45F67856AAF9); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A93EDFAF_B926_D65B_41DA_0F56FB43F112",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.11,
   "yaw": 89.64,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.46,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.2,
   "image": "this.AnimatedImageResource_AA6F14A3_B9FB_2A4B_41D6_9161184C1A86",
   "pitch": -31.44,
   "yaw": 149.69,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_66AAE5A9_3B87_D7E8_41BB_7648B3D7AB94); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6EC26EB_B927_37DB_41D3_2E2143262398",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.2,
   "yaw": 149.69,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.28,
   "image": "this.AnimatedImageResource_AA6F44A3_B9FB_2A4B_41C0_56CD47547E54",
   "pitch": -19.14,
   "yaw": 142.07,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_66862599_3B87_D7AB_41C1_A8247A23AEA0); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B657A391_B927_2E47_41E6_A6015249A1B2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.28,
   "yaw": 142.07,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.14,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.49,
   "image": "this.AnimatedImageResource_AA6E94A3_B9FB_2A4B_41E1_F8951ED0AC06",
   "pitch": -16.11,
   "yaw": 106.92,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_66A645B8_3B87_D7E9_4188_FBE12DAB25AE); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6D24A70_B926_DEC5_41E2_3B380794261F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.49,
   "yaw": 106.92,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.18,
   "image": "this.AnimatedImageResource_AA6ED4A3_B9FB_2A4B_41C7_76AB16F0AD54",
   "pitch": -10.49,
   "yaw": 118.35,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_664735C8_3B87_D7A9_41C6_B5635FFAE816); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B78EC11B_B929_6A7B_41E1_F48D93BE7CF0",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.18,
   "yaw": 118.35,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.86,
   "image": "this.AnimatedImageResource_24AB4705_3BF0_D2A9_41B7_74FEACB98100",
   "pitch": -31.9,
   "yaw": -131.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110, this.camera_664945C8_3B87_D7A9_41CC_F6BE61B1C1D9); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35F43366_3B30_516A_41BC_83F997E3AE3A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.86,
   "yaw": -131.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.9,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.76,
   "image": "this.AnimatedImageResource_24AAB705_3BF0_D2A9_41C6_D641485DD4A9",
   "pitch": -16.07,
   "yaw": -133.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C, this.camera_66937599_3B87_D7AB_41C1_A146BB778786); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BA9A39B_3B30_D1DA_41C6_B98634BBCA11",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.76,
   "yaw": -133.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.85,
   "image": "this.AnimatedImageResource_AA670493_B9FB_2A4B_41E5_7A7BA552B735",
   "pitch": -37.03,
   "yaw": 72.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_64B58E86_3B86_3598_41AE_A7F5F47532FA); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7F257D7_B8EF_D5CB_41C2_347114757800",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": 72.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.34,
   "image": "this.AnimatedImageResource_AA676493_B9FB_2A4B_41B5_827262F63832",
   "pitch": -33.75,
   "yaw": -106.76,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_64BF0E66_3B86_3499_41C8_1F9B332E99FD); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B778168D_B8E9_565F_41A5_1A5F9FEA1D83",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.34,
   "yaw": -106.76,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.35,
   "image": "this.AnimatedImageResource_AA669493_B9FB_2A4B_41E3_6CCCD965A933",
   "pitch": -20.23,
   "yaw": -146.94,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_6462DEF3_3B86_357F_41BD_A328409DA71B); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A8FA297C_B8E9_DABD_41D3_1A1FE14EED78",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.35,
   "yaw": -146.94,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.23,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.51,
   "image": "this.AnimatedImageResource_AA66D493_B9FB_2A4B_41D6_4BF2EC9DD5AC",
   "pitch": -24.36,
   "yaw": -168.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_64424EA5_3B86_359B_41A9_49AD1C108141); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B64396EE_B919_57DD_41DB_B643D4C0A743",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.51,
   "yaw": -168.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.62,
   "image": "this.AnimatedImageResource_AA662493_B9FB_2A4B_41C9_A0A4FAC5FBA8",
   "pitch": -24.63,
   "yaw": 148.93,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_6479CF03_3B86_3498_4180_21F4864D4DBA); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7CD2624_B929_564D_41D9_87A7D5A35FA6",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.62,
   "yaw": 148.93,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.34,
   "image": "this.AnimatedImageResource_AA666493_B9FB_2A4B_41B4_37322F54E673",
   "pitch": -16.2,
   "yaw": 116.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_64593EB4_3B86_35F9_41BA_848643D6EBEC); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A97963E3_B93B_6DCB_41E4_81C25B09E702",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.34,
   "yaw": 116.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.92,
   "image": "this.AnimatedImageResource_AA61B493_B9FB_2A4B_41E2_7F4FCA1AB509",
   "pitch": -22.42,
   "yaw": 78.4,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_6457CED4_3B86_35B8_41B2_4BEA8B841A8D); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6935648_B929_36C5_41B2_6F99B81F6B02",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.92,
   "yaw": 78.4,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.95,
   "image": "this.AnimatedImageResource_AA7B6484_B9FB_2A4D_41B6_5A3E4B949B7F",
   "pitch": -36.36,
   "yaw": -123.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_607ED412_3B87_D4B9_41C9_C01D8E7CBEAE); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7DC996B_B8E9_DADB_41C1_AA0A238DA5EB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.95,
   "yaw": -123.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.36,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.57,
   "image": "this.AnimatedImageResource_AA7AD493_B9FB_2A4B_41DF_E0D28416DA8B",
   "pitch": -19.25,
   "yaw": -93.87,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_601E2432_3B87_D4F8_41A5_0C784C392DB2); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B70BC055_B8E9_2ACF_41DB_DD9098665142",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.57,
   "yaw": -93.87,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.16,
   "image": "this.AnimatedImageResource_AA7A3493_B9FB_2A4B_41D0_605A842F297C",
   "pitch": -20.84,
   "yaw": -152.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A81122D0_B8E9_2FC5_41CC_475D0FABFD5F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.16,
   "yaw": -152.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.54,
   "image": "this.AnimatedImageResource_AA7A6493_B9FB_2A4B_41DE_FA885BFFBF95",
   "pitch": -14.38,
   "yaw": -161.18,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B7C828BF_B8E9_5BBB_41E2_24316AC35F63",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.54,
   "yaw": -161.18,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.48,
   "image": "this.AnimatedImageResource_AA65A493_B9FB_2A4B_418F_A5AC7290F895",
   "pitch": -16.99,
   "yaw": -112.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_600B8422_3B87_D499_41BC_493DB041578E); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9F29C4C_B91B_DADD_41B2_36A436256723",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.48,
   "yaw": -112.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.99,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.96,
   "image": "this.AnimatedImageResource_AA650493_B9FB_2A4B_41DA_7C5EB6166F75",
   "pitch": -19.86,
   "yaw": 98.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648, this.camera_6000E422_3B87_D499_41BF_CDD90B6CE139); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9D2F954_B9E9_DACD_41B9_1E3E9FEAFF48",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.96,
   "yaw": 98.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.08,
   "image": "this.AnimatedImageResource_AA652493_B9FB_2A4B_41D2_AD382BCAAFAD",
   "pitch": -5.35,
   "yaw": 113.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A, this.camera_602B4441_3B87_D49B_41CC_28C9F0E2F106); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6061792_B9E9_7645_41E3_1CF2977E7645",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.08,
   "yaw": 113.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.08,
   "image": "this.AnimatedImageResource_24B9A6F6_3BF0_D36A_419A_175CA5A686EA",
   "pitch": -13.82,
   "yaw": -132.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34CFC4F8_3B10_F767_41CC_8CB70AA0C607",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.08,
   "yaw": -132.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.14,
   "image": "this.AnimatedImageResource_24B936F6_3BF0_D36A_41C8_D2187BB0040E",
   "pitch": -11.44,
   "yaw": -143.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_358AC672_3B10_B36A_41CC_265DD29B8E25",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.14,
   "yaw": -143.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 4.53,
   "image": "this.AnimatedImageResource_24B976F6_3BF0_D36A_41C8_BCBFF7E4A864",
   "pitch": -11.53,
   "yaw": -156.17,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_352EC852_3B11_BEAA_41AC_7F63AE87465F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 4.53,
   "yaw": -156.17,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.53,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 27.03,
   "image": "this.AnimatedImageResource_248E7734_3BF0_D2EF_414E_B25DEA0DF254",
   "pitch": -13.59,
   "yaw": -22.51,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_663C0635_3B87_D4FB_41C6_0B53C7274004); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29F49527_3B10_D6EA_41C2_16B9494D3B61",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 27.03,
   "yaw": -22.51,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 19.83,
   "image": "this.AnimatedImageResource_24890734_3BF0_D2EF_41BF_302D3D141E94",
   "pitch": -26.3,
   "yaw": -87.61,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2AB42111_3B30_AEA9_41B5_68A4C2F19AC9",
 "maps": [
  {
   "hfov": 19.83,
   "yaw": -87.61,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 20.74,
   "image": "this.AnimatedImageResource_24894734_3BF0_D2EF_41A3_20AF355B0EA2",
   "pitch": -20.38,
   "yaw": 101.27,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29D87452_3B30_F6AA_41CC_351B3EC5D0BF",
 "maps": [
  {
   "hfov": 20.74,
   "yaw": 101.27,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.89,
   "image": "this.AnimatedImageResource_2488A734_3BF0_D2EF_41CB_7A70F27807B8",
   "pitch": -4.19,
   "yaw": 167.16,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_29592AEB_3B31_B379_41C7_8117F580E473",
 "maps": [
  {
   "hfov": 9.89,
   "yaw": 167.16,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_2_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8,
   "image": "this.AnimatedImageResource_2488F734_3BF0_D2EF_41C9_C29A95F9E107",
   "pitch": -2.98,
   "yaw": 141.09,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2F70D500_3B30_76A7_41C0_91090E443B54",
 "maps": [
  {
   "hfov": 8,
   "yaw": 141.09,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.98,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_3_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 6.91,
   "image": "this.AnimatedImageResource_24882734_3BF0_D2EF_41C9_11E7D3FD6108",
   "pitch": -2.02,
   "yaw": 124.86,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_2A90028E_3B30_F3BA_41C0_A7F1038A1883",
 "maps": [
  {
   "hfov": 6.91,
   "yaw": 124.86,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_4_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle Point 03c"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 10.19,
   "image": "this.AnimatedImageResource_24886734_3BF0_D2EF_41C8_366A5A2D65F8",
   "pitch": -4.35,
   "yaw": -172.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_28DA7DFA_3B30_515B_41AE_E062471EFBD8",
 "maps": [
  {
   "hfov": 10.19,
   "yaw": -172.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -4.35,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_5_0_0_map.gif",
      "width": 49,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 9.36,
   "image": "this.AnimatedImageResource_248BA734_3BF0_D2EF_419A_904EA68BEF34",
   "pitch": -6.42,
   "yaw": 100.85,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_294E9497_3B30_77AA_4195_971C0B204951",
 "maps": [
  {
   "hfov": 9.36,
   "yaw": 100.85,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -6.42,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 17.85,
   "image": "this.AnimatedImageResource_AA6B54A3_B9FB_2A4B_41E3_E128373BE5BB",
   "pitch": -15.06,
   "yaw": -24.1,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B7525_B49D_1358_41D4_B6129A22747A, this.camera_66F3657A_3B87_D768_41C3_F0731645C952); this.mainPlayList.set('selectedIndex', 14)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9650316_B9EB_6E4D_41BE_A693D63AAA97",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 17.85,
   "yaw": -24.1,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.06,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.8,
   "image": "this.AnimatedImageResource_2491E715_3BF0_D2AE_41B1_E1941E320635",
   "pitch": -24.67,
   "yaw": 112.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B, this.camera_66892589_3B87_D7AB_41BB_26FCE92C5E06); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9B50A64_B9EB_3ECD_41DE_639328A9ACED",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.8,
   "yaw": 112.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.75,
   "image": "this.AnimatedImageResource_24912715_3BF0_D2AE_41A5_F419E82A21CA",
   "pitch": -13.59,
   "yaw": 106.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_66E6757A_3B87_D768_41C0_86A60E5429FA); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_348D5519_3B30_B6A6_41C2_1E6D5CED3DF6",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.75,
   "yaw": 106.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.01,
   "image": "this.AnimatedImageResource_249A2725_3BF0_D2EE_41B1_E845114C7AC7",
   "pitch": -11.43,
   "yaw": 9.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3490807B_3B30_AF5A_41CA_F8DF553FD4C4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.01,
   "yaw": 9.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -11.43,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.91,
   "image": "this.AnimatedImageResource_24859725_3BF0_D2EE_41C4_8FB92F94A24A",
   "pitch": -22.1,
   "yaw": -29.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B0321D3_3B30_51AA_41AA_87B489848AE5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.91,
   "yaw": -29.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.96,
   "image": "this.AnimatedImageResource_51A6F870_3B8E_5D79_41BE_4E8B658BF262",
   "pitch": -7.45,
   "yaw": 27.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_6088A3A5_3B87_D39B_41C5_F094055FF12A); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BFD3C74_3B30_D76F_41CB_9A2F1116E808",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.96,
   "yaw": 27.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.45,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.75,
   "image": "this.AnimatedImageResource_51A66870_3B8E_5D79_41C5_D7FEDEEC7742",
   "pitch": -19.05,
   "yaw": 56.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_60F143A5_3B87_D39B_4184_8B931A2A2DE2); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_295CE675_3B30_536E_41CD_2C7FA5CB8B11",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.75,
   "yaw": 56.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.5,
   "image": "this.AnimatedImageResource_249AC725_3BF0_D2EE_41C7_921E580B7442",
   "pitch": -19.05,
   "yaw": 100.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_60D1B386_3B87_D399_41C8_BAFF94567177); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3476CF95_3B31_B1AE_41C5_CDB099521486",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.5,
   "yaw": 100.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.05,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.98,
   "image": "this.AnimatedImageResource_249A3725_3BF0_D2EE_41BD_D8DF5A6E5340",
   "pitch": -9.13,
   "yaw": 104.5,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B6015CE_3B31_D1BA_4198_13451AC18F90",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.98,
   "yaw": 104.5,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.02,
   "image": "this.AnimatedImageResource_249A7725_3BF0_D2EE_4199_E573AD399E6F",
   "pitch": -7.75,
   "yaw": 75.48,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2AD54D83_3B30_51AA_41AD_3AAEF376A7C7",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.02,
   "yaw": 75.48,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.66,
   "image": "this.AnimatedImageResource_2485D725_3BF0_D2EE_41C9_B5EE04A981BB",
   "pitch": -5.78,
   "yaw": 55.11,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34621462_3B30_576A_41C4_A1BCFBA2D34C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.66,
   "yaw": 55.11,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -5.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.65,
   "image": "this.AnimatedImageResource_24850725_3BF0_D2EE_41BC_761B26A3A8F1",
   "pitch": -25.59,
   "yaw": -58.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_344C1ED4_3B30_D3AE_41C1_784886D7FD10",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.65,
   "yaw": -58.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -25.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.21,
   "image": "this.AnimatedImageResource_24855725_3BF0_D2EE_41A8_E255CE8EAB83",
   "pitch": -28.11,
   "yaw": -101.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87, this.camera_60EF7386_3B87_D399_419C_3FDDB8BD4452); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B1A50C4_3B30_AFAE_419F_DB348818E4C7",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.21,
   "yaw": -101.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.11,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.34,
   "image": "this.AnimatedImageResource_2484B725_3BF0_D2EE_41B5_65143806FE74",
   "pitch": -30.63,
   "yaw": 7.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_60E43395_3B87_D3BB_41B1_C444EAB0860F); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B3DB48E_3B0F_B7BA_41C2_11715672BAA1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.34,
   "yaw": 7.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.63,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.56,
   "image": "this.AnimatedImageResource_2484E725_3BF0_D2EE_41C6_A7FB759D5065",
   "pitch": -16.89,
   "yaw": 7.36,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_608433B5_3B87_D3F8_41A6_302A71793EBB); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BDD1876_3B10_5F6B_41AD_840E9829897C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.56,
   "yaw": 7.36,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.89,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 46.42,
   "image": "this.AnimatedImageResource_2483A725_3BF0_D2EE_41B0_87B0FBE15A22",
   "pitch": -2.87,
   "yaw": 2.7,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E, this.camera_5B2AC099_3B87_CDA8_418F_197504DCE1AE); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29F37749_3B10_52A6_41BF_D7EBA97FBCF4",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 46.42,
   "yaw": 2.7,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -2.87,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_0_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.44,
   "image": "this.AnimatedImageResource_24830725_3BF0_D2EE_41AE_A63066134EB7",
   "pitch": -15.3,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_5B3A80A8_3B87_CDE9_41C1_2DA51799B3D5); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2944D3EA_3B10_717A_41AC_6409E6C24B08",
 "data": {
  "label": "Arrow 1"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.44,
   "yaw": 171.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_1_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14,
   "image": "this.AnimatedImageResource_24837725_3BF0_D2EE_416A_73524E810ECA",
   "pitch": -16.47,
   "yaw": -174.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_5ACA30B8_3B87_CDE9_41B5_1C50ECFBB80A); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_29FAA01A_3B11_EEDA_412C_FE19D2C9A9B8",
 "data": {
  "label": "Arrow 1"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14,
   "yaw": -174.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.47,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_2_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.73,
   "image": "this.AnimatedImageResource_AA6D5493_B9FB_2A4B_41D3_4AC26EFE4BB6",
   "pitch": -23.54,
   "yaw": 166.6,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B87928F1_B485_5259_41D9_20F0DA5AC841, this.camera_619412AB_3B87_CDEF_41BA_D75038D913D8); this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B607C877_B939_5ACB_41E4_41642B88E54E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.73,
   "yaw": 166.6,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.54,
   "image": "this.AnimatedImageResource_AA6C8493_B9FB_2A4B_41CC_47919288C7A9",
   "pitch": -16.44,
   "yaw": 137.41,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B, this.camera_6183B28C_3B87_CDA9_41CD_E3A860141662); this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9950667_B939_56CB_4174_81CB26F77C5C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.54,
   "yaw": 137.41,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.44,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.51,
   "image": "this.AnimatedImageResource_AA6CE493_B9FB_2A4B_41C5_7C3E2F1B152F",
   "pitch": -18.09,
   "yaw": 102.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_61BBD2CA_3B87_CDA9_419F_3C5081B594A9); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B67F60F1_B939_2BC7_41B3_E4B4EA7FBD55",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.51,
   "yaw": 102.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.09,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.34,
   "image": "this.AnimatedImageResource_AA6D9493_B9FB_2A4B_41E5_3C1630B521B1",
   "pitch": -30.26,
   "yaw": -74.9,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_6189727C_3B87_CD69_41BA_9DE7CC6AB7E1); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6645134_B93F_2A4D_41E5_41833D0AB51F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.34,
   "yaw": -74.9,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.26,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.88,
   "image": "this.AnimatedImageResource_AA6DB493_B9FB_2A4B_41D1_C70C079309FC",
   "pitch": -23.92,
   "yaw": -160.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_6186A28C_3B87_CDA9_41CA_34B90A561E75); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9298498_B93E_EA45_41E5_4B376C77F50A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.88,
   "yaw": -160.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.97,
   "image": "this.AnimatedImageResource_AA6D3493_B9FB_2A4B_41E4_5EB2B53E884C",
   "pitch": -22.77,
   "yaw": -131.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_61AE72BB_3B87_CDEF_4195_9A312C3DCCAB); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A96C97B0_B92B_3645_41DF_87D4818CC87C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.97,
   "yaw": -131.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.77,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 6.23,
   "image": "this.AnimatedImageResource_24AD5705_3BF0_D2A9_4170_DE6E1B93D957",
   "pitch": -24.51,
   "yaw": 76.79,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_61A172BB_3B87_CDEF_41CC_E9EDBFDFD081); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BF4AA9D_3B17_F3DE_41C5_CF27AB6AD3DF",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 6.23,
   "yaw": 76.79,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.51,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.98,
   "image": "this.AnimatedImageResource_24AC8705_3BF0_D2A9_418B_1FAB66953D54",
   "pitch": -35.13,
   "yaw": 64.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997, this.camera_619F029C_3B87_CDA8_41B0_9354B3B38DF6); this.mainPlayList.set('selectedIndex', 17)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3532F77A_3B17_B15B_419B_CEA0C6DB4B60",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.98,
   "yaw": 64.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.23,
   "image": "this.AnimatedImageResource_24ACC705_3BF0_D2A9_41A8_2BBD601B97DC",
   "pitch": -33.03,
   "yaw": 104.23,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_6191629C_3B87_CDA8_41C7_7C23D8722402); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34E29B0D_3B10_52BE_41CC_1F35184093E2",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.23,
   "yaw": 104.23,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -33.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.98,
   "image": "this.AnimatedImageResource_24AC0705_3BF0_D2A9_4197_3DD73B94FD9C",
   "pitch": -49.28,
   "yaw": 4.91,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_61BEB2DA_3B87_CDA9_4195_2D5EC0BF9EE8); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3423ABA8_3B10_D1E6_41B8_E124B5217679",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.98,
   "yaw": 4.91,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -49.28,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.77,
   "image": "this.AnimatedImageResource_24AC7705_3BF0_D2A9_419A_574692939CFB",
   "pitch": -35.57,
   "yaw": -45.84,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_61B712DA_3B87_CDA9_41C7_8E06C91CB244); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3533EF6B_3B10_517A_41B1_0B7A20C31F96",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.77,
   "yaw": -45.84,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -35.57,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "areas": [
  {
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "rollOverDisplay": false,
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "useHandCursor": true,
 "items": [
  {
   "hfov": 8.08,
   "image": "this.AnimatedImageResource_24AFB705_3BF0_D2A9_4198_63E7FC1D2A45",
   "pitch": -13.13,
   "yaw": -147.8,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "id": "overlay_34212F35_3B11_F2EE_41C1_41391625C5E6",
 "maps": [
  {
   "hfov": 8.08,
   "yaw": -147.8,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.13,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.49,
   "image": "this.AnimatedImageResource_AA6864A3_B9FB_2A4B_41E6_E7271CAABD2E",
   "pitch": -38.4,
   "yaw": -171.32,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_65A516A1_3B87_D59B_41B8_D5D140709DD0); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6E0FFEF_B9EF_D5DB_41E1_7AB97CA35DC6",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.49,
   "yaw": -171.32,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -38.4,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.2,
   "image": "this.AnimatedImageResource_AA6BC4A3_B9FB_2A4B_41E0_DE6B2A9F522D",
   "pitch": -19.19,
   "yaw": -53.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BA015F66_B485_CE7A_41E5_55B537AE195B, this.camera_659C7682_3B87_D599_41C3_FD897382B70B); this.mainPlayList.set('selectedIndex', 1)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A9EA7D6E_B9EF_5ADD_41D8_7BED964ADECC",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.2,
   "yaw": -53.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -19.19,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.22,
   "image": "this.AnimatedImageResource_AA6B14A3_B9FB_2A4B_41D6_913F5D95A025",
   "pitch": -28.67,
   "yaw": -42.44,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648, this.camera_65A9C692_3B87_D5B8_41B4_4B81B8BECB1B); this.mainPlayList.set('selectedIndex', 15)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B68531FC_B9EB_2DBD_41E4_27700CDF0B75",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.22,
   "yaw": -42.44,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.67,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.67,
   "image": "this.AnimatedImageResource_24960715_3BF0_D2AE_41C4_5023D30409CE",
   "pitch": -24.17,
   "yaw": -142.65,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB, this.camera_65BCF6A1_3B87_D59B_41C4_B42F79AC6D8C); this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_349B7E3C_3B37_F2DF_41BF_772E019FF2A4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.67,
   "yaw": -142.65,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.17,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 19.96,
   "image": "this.AnimatedImageResource_24964715_3BF0_D2AE_418F_8F263BC86930",
   "pitch": -39.25,
   "yaw": -124.47,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7, this.camera_654856B1_3B87_D5FB_41C3_62CD81A368C2); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B5E5817_3B30_5EAA_41C0_F73BEB33E87A",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 19.96,
   "yaw": -124.47,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -39.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 5.83,
   "image": "this.AnimatedImageResource_51947860_3B8E_5C99_41B6_A19FC2990650",
   "pitch": -3.1,
   "yaw": 114.66,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 24)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_172E1E00_3B82_7499_41C5_298E9D010A84",
 "data": {
  "label": "Arrow 06a"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 5.83,
   "yaw": 114.66,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -3.1,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_5_0_0_map.gif",
      "width": 27,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.53,
   "image": "this.AnimatedImageResource_2481D725_3BF0_D2EE_41B8_4BAC5BFCA1D7",
   "pitch": -23.96,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE, this.camera_614C72EA_3B87_CD68_41C6_93D3D39EE812); this.mainPlayList.set('selectedIndex', 20)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_349575AA_3B11_B1FA_41C9_FF9EEB00D154",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.53,
   "yaw": -156.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.96,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.02,
   "image": "this.AnimatedImageResource_24810725_3BF0_D2EE_41CA_95C6645E730F",
   "pitch": -26.83,
   "yaw": 39.95,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E, this.camera_615F9309_3B87_CCAB_41B5_C520DAE4C965); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A325B7E_3B10_515A_41C2_64A7BFE16E1F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.02,
   "yaw": 39.95,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.83,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.36,
   "image": "this.AnimatedImageResource_24814725_3BF0_D2EE_41C8_A35761A0AC91",
   "pitch": -18.07,
   "yaw": 70.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A, this.camera_6146D2F9_3B87_CD6B_41C7_BC1E46E9631A); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34D09070_3B10_AF66_41A0_0FC585C60E71",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.36,
   "yaw": 70.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -18.07,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 21.73,
   "image": "this.AnimatedImageResource_24808725_3BF0_D2EE_41BA_24534E37DC8F",
   "pitch": -7.03,
   "yaw": 132.37,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F, this.camera_614982EA_3B87_CD68_41C0_4D8A335504F3); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2A2A0A88_3B10_B3A6_41CB_FA368143ABAA",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 21.73,
   "yaw": 132.37,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -7.03,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.79,
   "image": "this.AnimatedImageResource_24874725_3BF0_D2EE_41A3_B887E0D7183C",
   "pitch": -10.02,
   "yaw": -0.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F, this.camera_65C96635_3B87_D4FB_41AB_99CA2A54D888); this.mainPlayList.set('selectedIndex', 0)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34F30912_3B10_7EAB_4188_B41533AA0EC7",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.79,
   "yaw": -0.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.02,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.83,
   "image": "this.AnimatedImageResource_2486B725_3BF0_D2EE_41BC_4851FEB4C8FD",
   "pitch": -13.92,
   "yaw": -62.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A, this.camera_65DCE645_3B87_D49B_41C4_0655DCA810E4); this.mainPlayList.set('selectedIndex', 22)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BFF57ED_3B13_F17E_41C0_7614349B364E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.83,
   "yaw": -62.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.92,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.99,
   "image": "this.AnimatedImageResource_24860725_3BF0_D2EE_41B7_51604663FE91",
   "pitch": -14.84,
   "yaw": -84.88,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E, this.camera_65EA6654_3B87_D4B9_419C_6F59114758DD); this.mainPlayList.set('selectedIndex', 23)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2AFEBAF7_3B10_536A_41C0_292BCA1ECF51",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.99,
   "yaw": -84.88,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.13,
   "image": "this.AnimatedImageResource_24864725_3BF0_D2EE_41CA_8F814444A522",
   "pitch": -22.18,
   "yaw": -107.12,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58, this.camera_65C77645_3B87_D49B_41C8_1D693B571AB7); this.mainPlayList.set('selectedIndex', 21)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34C52D22_3B10_D6EA_41A6_C54624CB308F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.13,
   "yaw": -107.12,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -22.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 16.53,
   "image": "this.AnimatedImageResource_AA6E04A3_B9FB_2A4B_41DE_E076FE54F0E8",
   "pitch": -26.62,
   "yaw": 79.74,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32, this.camera_5B5CE06A_3B87_CD69_41C5_2F44DB6CB423); this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B62D64CB_B92F_6BDB_41E2_FCF9C1C824D7",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 16.53,
   "yaw": 79.74,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -26.62,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 9.24,
   "image": "this.AnimatedImageResource_AA6E64A3_B9FB_2A4B_41E1_80EFBC2C8436",
   "pitch": -13.88,
   "yaw": 70.63,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_5B08C089_3B87_CDAB_41C9_66C37B4362B0); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A96248CC_B92F_3BDD_41E7_1AB847E67FAF",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 9.24,
   "yaw": 70.63,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.88,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.18,
   "image": "this.AnimatedImageResource_AA6994A3_B9FB_2A4B_41DC_345A7E113FCE",
   "pitch": -13.2,
   "yaw": 90.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A8163268_B929_2EC5_41E1_6BE51B63DC40",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.18,
   "yaw": 90.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.67,
   "image": "this.AnimatedImageResource_AA69D4A3_B9FB_2A4B_418B_37DEAB117AA8",
   "pitch": -21.79,
   "yaw": 110.72,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8645639_B485_71D6_41D3_094E6C42FD1A, this.camera_5B7EA089_3B87_CDAB_41C8_228D746C295F); this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B63CA9A5_B929_3A4F_41DF_E6A6ABB8AA1D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.67,
   "yaw": 110.72,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.79,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.62,
   "image": "this.AnimatedImageResource_AA6944A3_B9FB_2A4B_41D3_11755B97DCD3",
   "pitch": -29.25,
   "yaw": -113.31,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C, this.camera_5B6D1079_3B87_CD6B_41AC_ACD68DC093B9); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A954A089_B92A_EA47_41B5_5977DBECD819",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.62,
   "yaw": -113.31,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -29.25,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.47,
   "image": "this.AnimatedImageResource_2495F705_3BF0_D2A9_41B9_A55F421AF466",
   "pitch": -9.3,
   "yaw": -129.46,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5, this.camera_5B185099_3B87_CDA8_41C4_9738DD74BFD2); this.mainPlayList.set('selectedIndex', 12)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B7D038B_3B31_D1BA_41CC_03E6C76C9EF4",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.47,
   "yaw": -129.46,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.3,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.24,
   "image": "this.AnimatedImageResource_24955705_3BF0_D2A9_41C8_959EE886A980",
   "pitch": -10.84,
   "yaw": 109.49,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34B76C2B_3B30_B6F9_417A_F987CA0FF482",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.24,
   "yaw": 109.49,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.84,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.58,
   "image": "this.AnimatedImageResource_AA6864A3_B9FB_2A4B_41D4_0040D2CB1EA8",
   "pitch": -37.95,
   "yaw": 9.45,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C, this.camera_67F6848F_3B87_D5A7_41BB_0F57B1AF9D66); this.mainPlayList.set('selectedIndex', 11)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B6EB2B43_B919_FECB_41C7_4D4310310FA8",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.58,
   "yaw": 9.45,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -37.95,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.72,
   "image": "this.AnimatedImageResource_AA6914A3_B9FB_2A4B_41D8_B386D0C3641D",
   "pitch": -24.76,
   "yaw": 22.26,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110, this.camera_6797F4AF_3B87_D5E8_41B0_024DBBAE1CEF); this.mainPlayList.set('selectedIndex', 10)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_A82DCE20_B91A_D644_41E5_D2850652A002",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.72,
   "yaw": 22.26,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -24.76,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 15.98,
   "image": "this.AnimatedImageResource_AA6964A3_B9FB_2A4B_41D7_1360A0C7256C",
   "pitch": -30.16,
   "yaw": 172.89,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6, this.camera_6783B49F_3B87_D5A7_41CB_1D2442F081D4); this.mainPlayList.set('selectedIndex', 13)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_B620D2A6_B919_6E4D_41DC_F958B22781BB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 15.98,
   "yaw": 172.89,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.16,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_2_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 8.87,
   "image": "this.AnimatedImageResource_2497E715_3BF0_D2AE_41C7_B80C741F14DA",
   "pitch": -13.97,
   "yaw": 33.81,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 9)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3473A056_3B33_AEAA_41BF_0330C1DDB413",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 8.87,
   "yaw": 33.81,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -13.97,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.81,
   "image": "this.AnimatedImageResource_24977715_3BF0_D2AE_41B3_207B1ABC9C20",
   "pitch": -36.75,
   "yaw": 139.43,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 25)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3440AECA_3B30_53BA_41B4_84A965758EB1",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.81,
   "yaw": 139.43,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -36.75,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.64,
   "image": "this.AnimatedImageResource_2496B715_3BF0_D2AE_41B6_43826168DDF4",
   "pitch": -20.59,
   "yaw": 137.06,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7, this.camera_6799249F_3B87_D5A7_41B4_24112F100125); this.mainPlayList.set('selectedIndex', 26)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34D85266_3B30_536A_41CD_814F61553B61",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.64,
   "yaw": 137.06,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.59,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.97,
   "image": "this.AnimatedImageResource_249D2715_3BF0_D2AE_4175_F23B5257EC8B",
   "pitch": -14.22,
   "yaw": -142.99,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A, this.camera_6517F6FF_3B87_D567_41B3_2CCC4226DB99); this.mainPlayList.set('selectedIndex', 5)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_373448C5_3AF0_7FAE_41BA_7FE4DE45F20D",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.97,
   "yaw": -142.99,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -14.22,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_0_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.35,
   "image": "this.AnimatedImageResource_519F4860_3B8E_5C99_41C1_B04F7AC7F47F",
   "pitch": -12.49,
   "yaw": -119.04,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 2)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_343D66A9_3AF0_F3F9_41B7_1D54E1CA537E",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.35,
   "yaw": -119.04,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -12.49,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_1_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 13.14,
   "image": "this.AnimatedImageResource_519EE860_3B8E_5C99_417D_92BF8774893C",
   "pitch": -10.86,
   "yaw": -92.73,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 3)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_37085D74_3AF0_516F_41CA_92778D7081F5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 13.14,
   "yaw": -92.73,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -10.86,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_3_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.74,
   "image": "this.AnimatedImageResource_249C4715_3BF0_D2AE_4185_A61A21693F4D",
   "pitch": -9.56,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 4)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3714F04C_3AF0_AEBE_41CA_68E0A90EADB9",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.74,
   "yaw": -60.14,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.56,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_4_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 14.96,
   "image": "this.AnimatedImageResource_249FD715_3BF0_D2AE_41C6_C1B7A48E2084",
   "pitch": -20.54,
   "yaw": -93.21,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9, this.camera_652186FF_3B87_D567_41CA_F72E408AFAC6); this.mainPlayList.set('selectedIndex', 6)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_35B31C65_3AF0_B76E_41CC_0806BC4B9A1B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 14.96,
   "yaw": -93.21,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -20.54,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_5_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.85,
   "image": "this.AnimatedImageResource_249F0715_3BF0_D2AE_4192_DDBE6DD689E0",
   "pitch": -16.01,
   "yaw": -51.75,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B8786E48_B485_31B6_41DE_0018B7827AB9, this.camera_653D470F_3B87_D4A8_41C2_9C1190CA8E09); this.mainPlayList.set('selectedIndex', 7)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_3793D288_3AF0_53A7_41C0_3BFD4416DE59",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.85,
   "yaw": -51.75,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -16.01,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_6_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.6,
   "image": "this.AnimatedImageResource_249F5715_3BF0_D2AE_41CB_E0EB7369657D",
   "pitch": -9.2,
   "yaw": -28.78,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87, this.camera_64D7C72E_3B87_D4E9_41C6_31A112DD55D4); this.mainPlayList.set('selectedIndex', 8)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34A3BBD7_3AF1_B1AA_41C0_E1809D876CB5",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.6,
   "yaw": -28.78,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -9.2,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_7_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 10.34,
   "image": "this.AnimatedImageResource_249C1715_3BF0_D2AE_4190_609AD5E51A26",
   "pitch": -28.38,
   "yaw": 0.96,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B, this.camera_64C8771E_3B87_D4A9_41C9_1E474B1686CD); this.mainPlayList.set('selectedIndex', 18)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_340A8FA9_3AF0_71F9_41C4_9CF47602593F",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 10.34,
   "yaw": 0.96,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -28.38,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_8_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.1,
   "image": "this.AnimatedImageResource_249C7715_3BF0_D2AE_41BB_28843270B6C9",
   "pitch": -17.18,
   "yaw": -1.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD, this.camera_64DBD71E_3B87_D4A9_41B0_0E80ABEE8E87); this.mainPlayList.set('selectedIndex', 19)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_372CFDF4_3AF0_D16E_41BB_CEAD1A07447B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.1,
   "yaw": -1.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -17.18,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_9_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 7.15,
   "image": "this.AnimatedImageResource_249F8715_3BF0_D2AE_41CB_EE3CC0F2C78F",
   "pitch": -15.82,
   "yaw": 36.68,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87, this.camera_64FEF73E_3B87_D4E8_41BB_AA6FF8A12B49); this.mainPlayList.set('selectedIndex', 28)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_347AD061_3B33_AF66_41A0_10BE27FD3977",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 7.15,
   "yaw": 36.68,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -15.82,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_10_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.26,
   "image": "this.AnimatedImageResource_249FF715_3BF0_D2AE_41C0_1EA9E8C52A40",
   "pitch": -21.68,
   "yaw": 58.28,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 29)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2BFA4FE8_3B30_5167_4166_A904D699707C",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.26,
   "yaw": 58.28,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -21.68,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_11_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.28,
   "image": "this.AnimatedImageResource_249F2715_3BF0_D2AE_41A9_BB8D9CA5C373",
   "pitch": -31.24,
   "yaw": 93.58,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 30)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B428B4F_3B30_52BA_4191_9104D682F18B",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.28,
   "yaw": 93.58,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -31.24,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_12_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 12.08,
   "image": "this.AnimatedImageResource_249E9715_3BF0_D2AE_41B8_A9938FB6CD3A",
   "pitch": -23.7,
   "yaw": 152.55,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.mainPlayList.set('selectedIndex', 31)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_34F73DDA_3B31_D15A_41C1_5009753A5CC3",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 12.08,
   "yaw": 152.55,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -23.7,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_13_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "enabledInCardboard": true,
 "rollOverDisplay": false,
 "items": [
  {
   "hfov": 11.33,
   "image": "this.AnimatedImageResource_249EC715_3BF0_D2AE_41C5_F9AAB548B9E3",
   "pitch": -30.78,
   "yaw": 174.15,
   "class": "HotspotPanoramaOverlayImage",
   "distance": 100
  }
 ],
 "useHandCursor": true,
 "areas": [
  {
   "click": "this.startPanoramaWithCamera(this.panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0, this.camera_64E1273E_3B87_D4E8_41C4_F27A7C3AE693); this.mainPlayList.set('selectedIndex', 16)",
   "mapColor": "#FF0000",
   "class": "HotspotPanoramaOverlayArea"
  }
 ],
 "id": "overlay_2B8B14CF_3B30_57B9_41BD_80613528B9FB",
 "data": {
  "label": "Circle 03b"
 },
 "class": "HotspotPanoramaOverlay",
 "maps": [
  {
   "hfov": 11.33,
   "yaw": 174.15,
   "class": "HotspotPanoramaOverlayMap",
   "pitch": -30.78,
   "image": {
    "class": "ImageResource",
    "levels": [
     {
      "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_14_0_0_map.gif",
      "width": 39,
      "class": "ImageResourceLevel",
      "height": 16
     }
    ]
   }
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA610493_B9FB_2A4B_41D8_C9F9BDCB9F9D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA66B493_B9FB_2A4B_41DB_B249023019E7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA660493_B9FB_2A4B_41DD_159F88BFC1B3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA666493_B9FB_2A4B_41D1_E68767AD1F62",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA619493_B9FB_2A4B_41C5_9A0256DC4951",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA61F493_B9FB_2A4B_41D4_5726A47388DD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA615493_B9FB_2A4B_41E1_5E9C5DC3CD18",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A686F6_3BF0_D36A_41B1_127EF6C54679",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A6F6F6_3BF0_D36A_41BA_FE25537046F2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8645639_B485_71D6_41D3_094E6C42FD1A_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA68A4A3_B9FB_2A4B_41C8_181081B3B99F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA68F4A3_B9FB_2A4B_41DB_54D29638ADEA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6824A3_B9FB_2A4B_41D5_55B3D8B36A33",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2497E715_3BF0_D2AE_41BF_BCB811327539",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24972715_3BF0_D2AE_41BA_DA41C2648892",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_5196C860_3B8E_5C99_41C5_2B8E4BCDB56C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51964860_3B8E_5C99_417A_2173E1E5B888",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1EB0D4_B49D_32FF_41D6_DE5ACB437ED6_0_HS_6_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248B1734_3BF0_D2EF_41AF_BF745C093437",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_0_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248B4734_3BF0_D2EF_41B8_7AA1F3A37F9B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248A9734_3BF0_D2EF_41A9_C277193D50D8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248AF734_3BF0_D2EF_41C9_154856D8F85F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248A5734_3BF0_D2EF_41C0_3D1C9D0FDCB4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B759734_3BF0_D2EF_41C1_EA4120C1F36F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B75C734_3BF0_D2EF_41A0_E117517FCEDA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC4B57AA_B49B_1EAB_41CC_0C30CAF19A87_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA656493_B9FB_2A4B_41E1_3B11BA538B59",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA64C493_B9FB_2A4B_41E4_5A94A223AB6E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA64F493_B9FB_2A4B_41BC_10F8F2A478E2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA643493_B9FB_2A4B_41E6_AC3F8700F4DE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA679493_B9FB_2A4B_41DD_9CD79BC1087F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA67C493_B9FB_2A4B_41DB_2D7F4AFFDAB8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24BB36F6_3BF0_D36A_41B5_CDDA92377A15",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24BA96F6_3BF0_D36A_41C1_6A43983AA930",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24BAF6F6_3BF0_D36A_41BA_39AFAD9A33A9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24BA26F6_3BF0_D36A_41C9_EEFA213D5527",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B9A1CDE7_B485_D279_41E3_66A663726A0B_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2489D734_3BF0_D2EF_41CC_B912C4DAC182",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24890734_3BF0_D2EF_41CC_36C61FA7D9DB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_1_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248EC734_3BF0_D2EF_419F_017EB4D2ABFA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248E0734_3BF0_D2EF_4195_344A650CB9D2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248E7734_3BF0_D2EF_41B4_510282427AC9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51B5B87F_3B8E_5D67_41C4_17BAF371867C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD39011_B4BD_1179_41D4_3457E3FE2C87_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51935860_3B8E_5C99_41C7_33104677DD0E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2490C715_3BF0_D2AE_41C8_B574A06BC9C5",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24900715_3BF0_D2AE_41BA_B54ACFCDF7CC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24904715_3BF0_D2AE_41C7_6F79944DC2D8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2493A715_3BF0_D2AE_41CB_0276800DF4BD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2493F715_3BF0_D2AE_41C3_481043A75250",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24932715_3BF0_D2AE_41C4_0F58C41EADAC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24936715_3BF0_D2AE_41BC_BC6150C97CA2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2492D715_3BF0_D2AE_41C1_D8D9FCED5E76",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24920715_3BF0_D2AE_41C3_8034110C9AE2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24925715_3BF0_D2AE_41C4_83A9AAD0C19F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249DB715_3BF0_D2AE_41C8_91DAD414A310",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249DF715_3BF0_D2AE_41CB_BE497AE15413",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0499A2_B49D_1358_41DD_4D2924C1DFA0_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51AC287F_3B8E_5D67_41CD_0A165C00E39B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51ABC87F_3B8E_5D67_41B1_923FDE5FBE01",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24822725_3BF0_D2EE_418A_A68DF7D5D353",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248D9725_3BF0_D2EE_41CB_FCAB91AB80B4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248DF725_3BF0_D2EE_41C5_F4CC19E3286C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_4_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 360
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248D3725_3BF0_D2EE_41CC_C19D25273E61",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248D7725_3BF0_D2EE_41B6_7AFABB5F9CBB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248CA725_3BF0_D2EE_41CC_4F53746ECB0E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248CE725_3BF0_D2EE_41CC_7A01C26F67B8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC204A95_B4BD_1178_41D2_7A5A1F0D3BDB_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24864725_3BF0_D2EE_41BA_2E1BD60286D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24818725_3BF0_D2EE_41A5_3E76BB64E323",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2481F725_3BF0_D2EE_41BC_C0D75F4B8D38",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24812725_3BF0_D2EE_41C5_2A71CC564395",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC22F281_B4BB_3158_41E3_EE2AB25CFC1A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B750734_3BF0_D2EF_41BC_196FE0241D0B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B755734_3BF0_D2EF_41B6_3CE1341F0500",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B74B734_3BF0_D2EF_41C0_689B6F6C9D28",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_2_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B74E734_3BF0_D2EF_41C2_31AF3970992F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_3_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 22,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_1B742734_3BF0_D2EF_41CA_A80B48F59F38",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC49BA38_B49B_31A8_41E0_2AFC2F5C25BE_0_HS_4_0.png",
   "width": 1000,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AF1705_3BF0_D2A9_41BC_290696A2807C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6C9493_B9FB_2A4B_41E5_4931FCB7C467",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AE9705_3BF0_D2A9_41BB_65A5D0C73C8A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6C44A3_B9FB_2A4B_41E5_226164921933",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AEE705_3BF0_D2A9_41CB_3870051A4B87",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AE2705_3BF0_D2A9_4185_2E41EB02C039",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A99705_3BF0_D2A9_41CD_23D7771D8D57",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A9D705_3BF0_D2A9_41C1_27753C9311ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A92705_3BF0_D2A9_41C4_BE9FA9CF657E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A97705_3BF0_D2A9_41C1_B93F20DA31DB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A8B705_3BF0_D2A9_41C0_B5DEE2D49F51",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A81705_3BF0_D2A9_41A0_5FA12DD9CAC3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BBC27_B484_D1F9_41E6_1F9CEB93CA87_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA636493_B9FB_2A4B_41D5_C7B50EFE9602",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA62B493_B9FB_2A4B_41D8_8E32F66D532B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA62E493_B9FB_2A4B_41DD_4977A5B1F666",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA625493_B9FB_2A4B_41D6_474DA77BC0CC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6D8493_B9FB_2A4B_41D5_4A869745299F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6DC493_B9FB_2A4B_41E1_921252D1FBC7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6D2493_B9FB_2A4B_41D0_0629650B3E95",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A23705_3BF0_D2A9_41C4_929C70BDCCD2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AD8705_3BF0_D2A9_41BD_804B81D4B919",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24ADF705_3BF0_D2A9_419E_C0D5D7672D3F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AD3705_3BF0_D2A9_41C8_69195B1AF668",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AD6705_3BF0_D2A9_41A8_8D903C910F9E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B86BC0E4_B485_327E_41E4_55CC3568B5E9_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24845725_3BF0_D2EE_41C8_27939EFD9BE3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24878725_3BF0_D2EE_41CB_AD08B8C5150B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2487F725_3BF0_D2EE_41AA_8C8E517F8198",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24873725_3BF0_D2EE_41BC_E519F22C167E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0BA222_B49F_1158_41E1_6D5FC7A5D62F_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6884A3_B9FB_2A4B_41CB_0C5A2C2D2E42",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA68C4A3_B9FB_2A4B_41C8_58FB833340D2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6824A3_B9FB_2A4B_41C4_66727FD5C1E3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24941705_3BF0_D2A9_41BF_33291E7060DB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE18D3AA_B49D_F6A8_41DE_546E997B5A6C_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24816725_3BF0_D2EE_41CD_68C37418C09A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2480D725_3BF0_D2EE_41B5_84977DA3116A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24803725_3BF0_D2EE_4183_F3B128CE222C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24806725_3BF0_D2EE_41C2_B3748590D632",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51AD987F_3B8E_5D67_41BA_9C3D8EB03D06",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC3395C1_B4BB_12D9_4192_4DD213136C9E_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA617493_B9FB_2A4B_41D7_F762332F690A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA60C493_B9FB_2A4B_417A_D92F9F5D6954",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA601493_B9FB_2A4B_4181_B22F71EA7F33",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA604493_B9FB_2A4B_41DE_29D616B39A8A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA607493_B9FB_2A4B_41E4_17C8B2797F7E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA63E493_B9FB_2A4B_41C9_355592450FFA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA631493_B9FB_2A4B_41E5_812C031F5032",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A176F6_3BF0_D36A_41AF_1A6716D92ED3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A0A6F6_3BF0_D36A_41C1_2284455441D6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A016F6_3BF0_D36A_41BB_E5EAA9D5902D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A026F6_3BF0_D36A_41C4_4B78FE684213",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24A396F6_3BF0_D36A_41BF_BB75BA8039ED",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B878B39C_B485_56CF_41D3_F77E0A476A3A_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249E5715_3BF0_D2AE_41B6_4EF391C30F59",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249E6715_3BF0_D2AE_41A7_95F9258EEF38",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2499D715_3BF0_D2AE_41AB_C3126C2B6C72",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24991715_3BF0_D2AE_41B4_81BB5295DF39",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24994715_3BF0_D2AE_41AF_15AC857DFA95",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24988715_3BF0_D2AE_41B8_F71226FFAB6B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2498F715_3BF0_D2AE_41C6_514423B78F48",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24983715_3BF0_D2DE_41C1_556657AB1BE7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24986725_3BF0_D2EE_41CC_7F7268DAF3EB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249BB725_3BF0_D2EE_41C9_D61F38B8CD19",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249BF725_3BF0_D2EE_41CD_82C735E37E1D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249B5725_3BF0_D2EE_41AF_27DFE378BB35",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249AB725_3BF0_D2EE_41CB_8D03CF1844A3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249AF725_3BF0_D2EE_41CA_F85E62730B9B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B2FB3_B49F_0EB9_41E5_E893664D9F4B_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248C2725_3BF0_D2EE_4192_0A8593028855",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248F9725_3BF0_D2EE_41C2_938D23D1FFFE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248FF725_3BF0_D2EE_41AE_335F494F37DD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248F2725_3BF0_D2EE_41CA_270CCCB2FDE6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248E8725_3BF0_D2EE_41CD_B296CFE39D17",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248EC725_3BF0_D2EE_41A6_21B80A0D9978",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248E3734_3BF0_D2EF_41C7_0B777F3FA6F9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC2D0C6C_B4BD_31AF_41E2_7029FC72F9A7_0_HS_6_0.png",
   "width": 520,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6C74A3_B9FB_2A4B_41A6_6BD53B9A5DE4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6FC4A3_B9FB_2A4B_41D1_E8C04498CFC9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6F14A3_B9FB_2A4B_41D6_9161184C1A86",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6F44A3_B9FB_2A4B_41C0_56CD47547E54",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6E94A3_B9FB_2A4B_41E1_F8951ED0AC06",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6ED4A3_B9FB_2A4B_41C7_76AB16F0AD54",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AB4705_3BF0_D2A9_41B7_74FEACB98100",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AAB705_3BF0_D2A9_41C6_D641485DD4A9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8785BB8_B484_F6D7_41CD_875499C8AF32_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA670493_B9FB_2A4B_41E5_7A7BA552B735",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA676493_B9FB_2A4B_41B5_827262F63832",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA669493_B9FB_2A4B_41E3_6CCCD965A933",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA66D493_B9FB_2A4B_41D6_4BF2EC9DD5AC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA662493_B9FB_2A4B_41C9_A0A4FAC5FBA8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA666493_B9FB_2A4B_41B4_37322F54E673",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA61B493_B9FB_2A4B_41E2_7F4FCA1AB509",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B87928F1_B485_5259_41D9_20F0DA5AC841_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA7B6484_B9FB_2A4D_41B6_5A3E4B949B7F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA7AD493_B9FB_2A4B_41DF_E0D28416DA8B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA7A3493_B9FB_2A4B_41D0_605A842F297C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA7A6493_B9FB_2A4B_41DE_FA885BFFBF95",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA65A493_B9FB_2A4B_418F_A5AC7290F895",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA650493_B9FB_2A4B_41DA_7C5EB6166F75",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA652493_B9FB_2A4B_41D2_AD382BCAAFAD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24B9A6F6_3BF0_D36A_419A_175CA5A686EA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24B936F6_3BF0_D36A_41C8_D2187BB0040E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24B976F6_3BF0_D36A_41C8_BCBFF7E4A864",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BA015F66_B485_CE7A_41E5_55B537AE195B_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248E7734_3BF0_D2EF_414E_B25DEA0DF254",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_ACD3ADF8_B4BD_12A8_41E3_FD91C734A51E_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24890734_3BF0_D2EF_41BF_302D3D141E94",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24894734_3BF0_D2EF_41A3_20AF355B0EA2",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2488A734_3BF0_D2EF_41CB_7A70F27807B8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_2_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2488F734_3BF0_D2EF_41C9_C29A95F9E107",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_3_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24882734_3BF0_D2EF_41C9_11E7D3FD6108",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_4_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24886734_3BF0_D2EF_41C8_366A5A2D65F8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_5_0.png",
   "width": 800,
   "class": "ImageResourceLevel",
   "height": 390
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_248BA734_3BF0_D2EF_419A_904EA68BEF34",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AEA2240B_B49B_F168_41C8_7408183525E1_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6B54A3_B9FB_2A4B_41E3_E128373BE5BB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2491E715_3BF0_D2AE_41B1_E1941E320635",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24912715_3BF0_D2AE_41A5_F419E82A21CA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E7A7D_B49D_11A9_41CA_3EA42688F648_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249A2725_3BF0_D2EE_41B1_E845114C7AC7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24859725_3BF0_D2EE_41C4_8FB92F94A24A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51A6F870_3B8E_5D79_41BE_4E8B658BF262",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51A66870_3B8E_5D79_41C5_D7FEDEEC7742",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249AC725_3BF0_D2EE_41C7_921E580B7442",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249A3725_3BF0_D2EE_41BD_D8DF5A6E5340",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249A7725_3BF0_D2EE_4199_E573AD399E6F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2485D725_3BF0_D2EE_41C9_B5EE04A981BB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24850725_3BF0_D2EE_41BC_761B26A3A8F1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24855725_3BF0_D2EE_41A8_E255CE8EAB83",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2484B725_3BF0_D2EE_41B5_65143806FE74",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2484E725_3BF0_D2EE_41C6_A7FB759D5065",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1FF2BE_B49F_76AB_41DA_E4A4DB6CFBAD_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2483A725_3BF0_D2EE_41B0_87B0FBE15A22",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_0_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24830725_3BF0_D2EE_41AE_A63066134EB7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_1_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24837725_3BF0_D2EE_416A_73524E810ECA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_AC220798_B4BC_FF68_41C6_85DD68AB6696_0_HS_2_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6D5493_B9FB_2A4B_41D3_4AC26EFE4BB6",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6C8493_B9FB_2A4B_41CC_47919288C7A9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6CE493_B9FB_2A4B_41C5_7C3E2F1B152F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6D9493_B9FB_2A4B_41E5_3C1630B521B1",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6DB493_B9FB_2A4B_41D1_C70C079309FC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6D3493_B9FB_2A4B_41E4_5EB2B53E884C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AD5705_3BF0_D2A9_4170_DE6E1B93D957",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AC8705_3BF0_D2A9_418B_1FAB66953D54",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24ACC705_3BF0_D2A9_41A8_2BBD601B97DC",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AC0705_3BF0_D2A9_4197_3DD73B94FD9C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AC7705_3BF0_D2A9_419A_574692939CFB",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24AFB705_3BF0_D2A9_4198_63E7FC1D2A45",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_B8786E48_B485_31B6_41DE_0018B7827AB9_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6864A3_B9FB_2A4B_41E6_E7271CAABD2E",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6BC4A3_B9FB_2A4B_41E0_DE6B2A9F522D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6B14A3_B9FB_2A4B_41D6_913F5D95A025",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24960715_3BF0_D2AE_41C4_5023D30409CE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24964715_3BF0_D2AE_418F_8F263BC86930",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_51947860_3B8E_5C99_41B6_A19FC2990650",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0B7525_B49D_1358_41D4_B6129A22747A_0_HS_5_0.png",
   "width": 480,
   "class": "ImageResourceLevel",
   "height": 420
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2481D725_3BF0_D2EE_41B8_4BAC5BFCA1D7",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24810725_3BF0_D2EE_41CA_95C6645E730F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24814725_3BF0_D2EE_41C8_A35761A0AC91",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24808725_3BF0_D2EE_41BA_24534E37DC8F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE3CD2A8_B49F_16A8_41DD_BED0C2ACDC58_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24874725_3BF0_D2EE_41A3_B887E0D7183C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2486B725_3BF0_D2EE_41BC_4851FEB4C8FD",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24860725_3BF0_D2EE_41B7_51604663FE91",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24864725_3BF0_D2EE_41CA_8F814444A522",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E628D_B49F_3169_41E1_DA95C2963BEE_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6E04A3_B9FB_2A4B_41DE_E076FE54F0E8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6E64A3_B9FB_2A4B_41E1_80EFBC2C8436",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6994A3_B9FB_2A4B_41DC_345A7E113FCE",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA69D4A3_B9FB_2A4B_418B_37DEAB117AA8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6944A3_B9FB_2A4B_41D3_11755B97DCD3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2495F705_3BF0_D2A9_41B9_A55F421AF466",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24955705_3BF0_D2A9_41C8_959EE886A980",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE66DF9C_B49D_0F68_41E5_62AC2B36C110_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6864A3_B9FB_2A4B_41D4_0040D2CB1EA8",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6914A3_B9FB_2A4B_41D8_B386D0C3641D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_AA6964A3_B9FB_2A4B_41D7_1360A0C7256C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_2_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2497E715_3BF0_D2AE_41C7_B80C741F14DA",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_24977715_3BF0_D2AE_41B3_207B1ABC9C20",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_2496B715_3BF0_D2AE_41B6_43826168DDF4",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE0A41E8_B49D_12D7_41D4_AB9D296772B5_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249D2715_3BF0_D2AE_4175_F23B5257EC8B",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_0_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_519F4860_3B8E_5C99_41C1_B04F7AC7F47F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_1_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_519EE860_3B8E_5C99_417D_92BF8774893C",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_3_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249C4715_3BF0_D2AE_4185_A61A21693F4D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_4_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249FD715_3BF0_D2AE_41C6_C1B7A48E2084",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_5_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249F0715_3BF0_D2AE_4192_DDBE6DD689E0",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_6_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249F5715_3BF0_D2AE_41CB_E0EB7369657D",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_7_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249C1715_3BF0_D2AE_4190_609AD5E51A26",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_8_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249C7715_3BF0_D2AE_41BB_28843270B6C9",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_9_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249F8715_3BF0_D2AE_41CB_EE3CC0F2C78F",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_10_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249FF715_3BF0_D2AE_41C0_1EA9E8C52A40",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_11_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249F2715_3BF0_D2AE_41A9_BB8D9CA5C373",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_12_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249E9715_3BF0_D2AE_41B8_A9938FB6CD3A",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_13_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
},
{
 "rowCount": 6,
 "frameCount": 24,
 "class": "AnimatedImageResource",
 "colCount": 4,
 "id": "AnimatedImageResource_249EC715_3BF0_D2AE_41C5_F9AAB548B9E3",
 "frameDuration": 41,
 "levels": [
  {
   "url": "media/panorama_BE1E1589_B49F_1368_41DF_D8E8640B7997_0_HS_14_0.png",
   "width": 1080,
   "class": "ImageResourceLevel",
   "height": 660
  }
 ]
}],
 "start": "this.init()",
 "data": {
  "name": "Player501"
 },
 "children": [
  "this.MainViewer"
 ],
 "layout": "absolute",
 "id": "rootPlayer",
 "mobileMipmappingEnabled": false,
 "vrPolyfillScale": 1,
 "scrollBarOpacity": 0.5,
 "scrollBarColor": "#000000",
 "class": "Player",
 "minHeight": 20,
 "horizontalAlign": "left",
 "shadow": false,
 "scrollBarVisible": "rollOver",
 "borderSize": 0,
 "backgroundPreloadEnabled": true,
 "minWidth": 20,
 "defaultVRPointer": "laser",
 "scripts": {
  "fixTogglePlayPauseButton": function(player){  var state = player.get('state'); var buttons = player.get('buttonPlayPause'); if(typeof buttons !== 'undefined' && player.get('state') == 'playing'){ if(!Array.isArray(buttons)) buttons = [buttons]; for(var i = 0; i<buttons.length; ++i) buttons[i].set('pressed', true); } },
  "stopGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; if(audio){ delete audios[audio.get('id')]; if(Object.keys(audios).length == 0){ window.currentGlobalAudios = undefined; } } } if(audio) audio.stop(); },
  "getMediaByName": function(name){  var list = this.getByClassName('Media'); for(var i = 0, count = list.length; i<count; ++i){ var media = list[i]; if((media.get('class') == 'Audio' && media.get('data').label == name) || media.get('label') == name){ return media; } } return undefined; },
  "changeBackgroundWhilePlay": function(playList, index, color){  var stopFunction = function(event){ playListItem.unbind('stop', stopFunction, this); if((color == viewerArea.get('backgroundColor')) && (colorRatios == viewerArea.get('backgroundColorRatios'))){ viewerArea.set('backgroundColor', backgroundColorBackup); viewerArea.set('backgroundColorRatios', backgroundColorRatiosBackup); } }; var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var viewerArea = player.get('viewerArea'); var backgroundColorBackup = viewerArea.get('backgroundColor'); var backgroundColorRatiosBackup = viewerArea.get('backgroundColorRatios'); var colorRatios = [0]; if((color != backgroundColorBackup) || (colorRatios != backgroundColorRatiosBackup)){ viewerArea.set('backgroundColor', color); viewerArea.set('backgroundColorRatios', colorRatios); playListItem.bind('stop', stopFunction, this); } },
  "visibleComponentsIfPlayerFlagEnabled": function(components, playerFlag){  var enabled = this.get(playerFlag); for(var i in components){ components[i].set('visible', enabled); } },
  "setEndToItemIndex": function(playList, fromIndex, toIndex){  var endFunction = function(){ if(playList.get('selectedIndex') == fromIndex) playList.set('selectedIndex', toIndex); }; this.executeFunctionWhenChange(playList, fromIndex, endFunction); },
  "getGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios != undefined && audio.get('id') in audios){ audio = audios[audio.get('id')]; } return audio; },
  "showWindow": function(w, autoCloseMilliSeconds, containsAudio){  if(w.get('visible') == true){ return; } var closeFunction = function(){ clearAutoClose(); this.resumePlayers(playersPaused, !containsAudio); w.unbind('close', closeFunction, this); }; var clearAutoClose = function(){ w.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ w.hide(); }; w.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } var playersPaused = this.pauseCurrentPlayers(!containsAudio); w.bind('close', closeFunction, this); w.show(this, true); },
  "setMainMediaByIndex": function(index){  var item = undefined; if(index >= 0 && index < this.mainPlayList.get('items').length){ this.mainPlayList.set('selectedIndex', index); item = this.mainPlayList.get('items')[index]; } return item; },
  "loopAlbum": function(playList, index){  var playListItem = playList.get('items')[index]; var player = playListItem.get('player'); var loopFunction = function(){ player.play(); }; this.executeFunctionWhenChange(playList, index, loopFunction); },
  "setCameraSameSpotAsMedia": function(camera, media){  var player = this.getCurrentPlayerWithMedia(media); if(player != undefined) { var position = camera.get('initialPosition'); position.set('yaw', player.get('yaw')); position.set('pitch', player.get('pitch')); position.set('hfov', player.get('hfov')); } },
  "getMediaFromPlayer": function(player){  switch(player.get('class')){ case 'PanoramaPlayer': return player.get('panorama') || player.get('video'); case 'VideoPlayer': case 'Video360Player': return player.get('video'); case 'PhotoAlbumPlayer': return player.get('photoAlbum'); case 'MapPlayer': return player.get('map'); } },
  "getComponentByName": function(name){  var list = this.getByClassName('UIComponent'); for(var i = 0, count = list.length; i<count; ++i){ var component = list[i]; var data = component.get('data'); if(data != undefined && data.name == name){ return component; } } return undefined; },
  "resumeGlobalAudios": function(caller){  if (window.pauseGlobalAudiosState == undefined || !(caller in window.pauseGlobalAudiosState)) return; var audiosPaused = window.pauseGlobalAudiosState[caller]; delete window.pauseGlobalAudiosState[caller]; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = audiosPaused.length-1; j>=0; --j) { var a = audiosPaused[j]; if(objAudios.indexOf(a) != -1) audiosPaused.splice(j, 1); } } for (var i = 0, count = audiosPaused.length; i<count; ++i) { var a = audiosPaused[i]; if (a.get('state') == 'paused') a.play(); } },
  "setMapLocation": function(panoramaPlayListItem, mapPlayer){  var resetFunction = function(){ panoramaPlayListItem.unbind('stop', resetFunction, this); player.set('mapPlayer', null); }; panoramaPlayListItem.bind('stop', resetFunction, this); var player = panoramaPlayListItem.get('player'); player.set('mapPlayer', mapPlayer); },
  "updateMediaLabelFromPlayList": function(playList, htmlText, playListItemStopToDispose){  var changeFunction = function(){ var index = playList.get('selectedIndex'); if(index >= 0){ var beginFunction = function(){ playListItem.unbind('begin', beginFunction); setMediaLabel(index); }; var setMediaLabel = function(index){ var media = playListItem.get('media'); var text = media.get('data'); if(!text) text = media.get('label'); setHtml(text); }; var setHtml = function(text){ if(text !== undefined) { htmlText.set('html', '<div style=\"text-align:left\"><SPAN STYLE=\"color:#FFFFFF;font-size:12px;font-family:Verdana\"><span color=\"white\" font-family=\"Verdana\" font-size=\"12px\">' + text + '</SPAN></div>'); } else { htmlText.set('html', ''); } }; var playListItem = playList.get('items')[index]; if(htmlText.get('html')){ setHtml('Loading...'); playListItem.bind('begin', beginFunction); } else{ setMediaLabel(index); } } }; var disposeFunction = function(){ htmlText.set('html', undefined); playList.unbind('change', changeFunction, this); playListItemStopToDispose.unbind('stop', disposeFunction, this); }; if(playListItemStopToDispose){ playListItemStopToDispose.bind('stop', disposeFunction, this); } playList.bind('change', changeFunction, this); changeFunction(); },
  "setPanoramaCameraWithCurrentSpot": function(playListItem){  var currentPlayer = this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer == undefined){ return; } var playerClass = currentPlayer.get('class'); if(playerClass != 'PanoramaPlayer' && playerClass != 'Video360Player'){ return; } var fromMedia = currentPlayer.get('panorama'); if(fromMedia == undefined) { fromMedia = currentPlayer.get('video'); } var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, fromMedia); this.startPanoramaWithCamera(panorama, newCamera); },
  "showPopupMedia": function(w, media, playList, popupMaxWidth, popupMaxHeight, autoCloseWhenFinished, stopAudios){  var self = this; var closeFunction = function(){ playList.set('selectedIndex', -1); self.MainViewer.set('toolTipEnabled', true); if(stopAudios) { self.resumeGlobalAudios(); } this.resumePlayers(playersPaused, !stopAudios); if(isVideo) { this.unbind('resize', resizeFunction, this); } w.unbind('close', closeFunction, this); }; var endFunction = function(){ w.hide(); }; var resizeFunction = function(){ var getWinValue = function(property){ return w.get(property) || 0; }; var parentWidth = self.get('actualWidth'); var parentHeight = self.get('actualHeight'); var mediaWidth = self.getMediaWidth(media); var mediaHeight = self.getMediaHeight(media); var popupMaxWidthNumber = parseFloat(popupMaxWidth) / 100; var popupMaxHeightNumber = parseFloat(popupMaxHeight) / 100; var windowWidth = popupMaxWidthNumber * parentWidth; var windowHeight = popupMaxHeightNumber * parentHeight; var footerHeight = getWinValue('footerHeight'); var headerHeight = getWinValue('headerHeight'); if(!headerHeight) { var closeButtonHeight = getWinValue('closeButtonIconHeight') + getWinValue('closeButtonPaddingTop') + getWinValue('closeButtonPaddingBottom'); var titleHeight = self.getPixels(getWinValue('titleFontSize')) + getWinValue('titlePaddingTop') + getWinValue('titlePaddingBottom'); headerHeight = closeButtonHeight > titleHeight ? closeButtonHeight : titleHeight; headerHeight += getWinValue('headerPaddingTop') + getWinValue('headerPaddingBottom'); } var contentWindowWidth = windowWidth - getWinValue('bodyPaddingLeft') - getWinValue('bodyPaddingRight') - getWinValue('paddingLeft') - getWinValue('paddingRight'); var contentWindowHeight = windowHeight - headerHeight - footerHeight - getWinValue('bodyPaddingTop') - getWinValue('bodyPaddingBottom') - getWinValue('paddingTop') - getWinValue('paddingBottom'); var parentAspectRatio = contentWindowWidth / contentWindowHeight; var mediaAspectRatio = mediaWidth / mediaHeight; if(parentAspectRatio > mediaAspectRatio) { windowWidth = contentWindowHeight * mediaAspectRatio + getWinValue('bodyPaddingLeft') + getWinValue('bodyPaddingRight') + getWinValue('paddingLeft') + getWinValue('paddingRight'); } else { windowHeight = contentWindowWidth / mediaAspectRatio + headerHeight + footerHeight + getWinValue('bodyPaddingTop') + getWinValue('bodyPaddingBottom') + getWinValue('paddingTop') + getWinValue('paddingBottom'); } if(windowWidth > parentWidth * popupMaxWidthNumber) { windowWidth = parentWidth * popupMaxWidthNumber; } if(windowHeight > parentHeight * popupMaxHeightNumber) { windowHeight = parentHeight * popupMaxHeightNumber; } w.set('width', windowWidth); w.set('height', windowHeight); w.set('x', (parentWidth - getWinValue('actualWidth')) * 0.5); w.set('y', (parentHeight - getWinValue('actualHeight')) * 0.5); }; if(autoCloseWhenFinished){ this.executeFunctionWhenChange(playList, 0, endFunction); } var mediaClass = media.get('class'); var isVideo = mediaClass == 'Video' || mediaClass == 'Video360'; playList.set('selectedIndex', 0); if(isVideo){ this.bind('resize', resizeFunction, this); resizeFunction(); playList.get('items')[0].get('player').play(); } else { w.set('width', popupMaxWidth); w.set('height', popupMaxHeight); } this.MainViewer.set('toolTipEnabled', false); if(stopAudios) { this.pauseGlobalAudios(); } var playersPaused = this.pauseCurrentPlayers(!stopAudios); w.bind('close', closeFunction, this); w.show(this, true); },
  "pauseGlobalAudios": function(caller, exclude){  if (window.pauseGlobalAudiosState == undefined) window.pauseGlobalAudiosState = {}; if (window.pauseGlobalAudiosList == undefined) window.pauseGlobalAudiosList = []; if (caller in window.pauseGlobalAudiosState) { return; } var audios = this.getByClassName('Audio').concat(this.getByClassName('VideoPanoramaOverlay')); if (window.currentGlobalAudios != undefined) audios = audios.concat(Object.values(window.currentGlobalAudios)); var audiosPaused = []; var values = Object.values(window.pauseGlobalAudiosState); for (var i = 0, count = values.length; i<count; ++i) { var objAudios = values[i]; for (var j = 0; j<objAudios.length; ++j) { var a = objAudios[j]; if(audiosPaused.indexOf(a) == -1) audiosPaused.push(a); } } window.pauseGlobalAudiosState[caller] = audiosPaused; for (var i = 0, count = audios.length; i < count; ++i) { var a = audios[i]; if (a.get('state') == 'playing' && (exclude == undefined || exclude.indexOf(a) == -1)) { a.pause(); audiosPaused.push(a); } } },
  "unregisterKey": function(key){  delete window[key]; },
  "resumePlayers": function(players, onlyResumeCameraIfPanorama){  for(var i = 0; i<players.length; ++i){ var player = players[i]; if(onlyResumeCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.resumeCamera(); } else{ player.play(); } } },
  "showPopupPanoramaVideoOverlay": function(popupPanoramaOverlay, closeButtonProperties, stopAudios){  var self = this; var showEndFunction = function() { popupPanoramaOverlay.unbind('showEnd', showEndFunction); closeButton.bind('click', hideFunction, this); setCloseButtonPosition(); closeButton.set('visible', true); }; var endFunction = function() { if(!popupPanoramaOverlay.get('loop')) hideFunction(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); popupPanoramaOverlay.set('visible', false); closeButton.set('visible', false); closeButton.unbind('click', hideFunction, self); popupPanoramaOverlay.unbind('end', endFunction, self); popupPanoramaOverlay.unbind('hideEnd', hideFunction, self, true); self.resumePlayers(playersPaused, true); if(stopAudios) { self.resumeGlobalAudios(); } }; var setCloseButtonPosition = function() { var right = 10; var top = 10; closeButton.set('right', right); closeButton.set('top', top); }; this.MainViewer.set('toolTipEnabled', false); var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(true); if(stopAudios) { this.pauseGlobalAudios(); } popupPanoramaOverlay.bind('end', endFunction, this, true); popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); popupPanoramaOverlay.bind('hideEnd', hideFunction, this, true); popupPanoramaOverlay.set('visible', true); },
  "getPlayListItems": function(media, player){  var itemClass = (function() { switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': return 'PanoramaPlayListItem'; case 'Video360': return 'Video360PlayListItem'; case 'PhotoAlbum': return 'PhotoAlbumPlayListItem'; case 'Map': return 'MapPlayListItem'; case 'Video': return 'VideoPlayListItem'; } })(); if (itemClass != undefined) { var items = this.getByClassName(itemClass); for (var i = items.length-1; i>=0; --i) { var item = items[i]; if(item.get('media') != media || (player != undefined && item.get('player') != player)) { items.splice(i, 1); } } return items; } else { return []; } },
  "changePlayListWithSameSpot": function(playList, newIndex){  var currentIndex = playList.get('selectedIndex'); if (currentIndex >= 0 && newIndex >= 0 && currentIndex != newIndex) { var currentItem = playList.get('items')[currentIndex]; var newItem = playList.get('items')[newIndex]; var currentPlayer = currentItem.get('player'); var newPlayer = newItem.get('player'); if ((currentPlayer.get('class') == 'PanoramaPlayer' || currentPlayer.get('class') == 'Video360Player') && (newPlayer.get('class') == 'PanoramaPlayer' || newPlayer.get('class') == 'Video360Player')) { var newCamera = this.cloneCamera(newItem.get('camera')); this.setCameraSameSpotAsMedia(newCamera, currentItem.get('media')); this.startPanoramaWithCamera(newItem.get('media'), newCamera); } } },
  "getPlayListItemByMedia": function(playList, media){  var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media) return item; } return undefined; },
  "shareWhatsapp": function(url){  window.open('https://api.whatsapp.com/send/?text=' + encodeURIComponent(url), '_blank'); },
  "setOverlayBehaviour": function(overlay, media, action){  var executeFunc = function() { switch(action){ case 'triggerClick': this.triggerOverlay(overlay, 'click'); break; case 'stop': case 'play': case 'pause': overlay[action](); break; case 'togglePlayPause': case 'togglePlayStop': if(overlay.get('state') == 'playing') overlay[action == 'togglePlayPause' ? 'pause' : 'stop'](); else overlay.play(); break; } if(window.overlaysDispatched == undefined) window.overlaysDispatched = {}; var id = overlay.get('id'); window.overlaysDispatched[id] = true; setTimeout(function(){ delete window.overlaysDispatched[id]; }, 2000); }; if(window.overlaysDispatched != undefined && overlay.get('id') in window.overlaysDispatched) return; var playList = this.getPlayListWithMedia(media, true); if(playList != undefined){ var item = this.getPlayListItemByMedia(playList, media); if(playList.get('items').indexOf(item) != playList.get('selectedIndex')){ var beginFunc = function(e){ item.unbind('begin', beginFunc, this); executeFunc.call(this); }; item.bind('begin', beginFunc, this); return; } } executeFunc.call(this); },
  "getCurrentPlayers": function(){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); return players; },
  "playGlobalAudio": function(audio, endCallback){  var endFunction = function(){ audio.unbind('end', endFunction, this); this.stopGlobalAudio(audio); if(endCallback) endCallback(); }; audio = this.getGlobalAudio(audio); var audios = window.currentGlobalAudios; if(!audios){ audios = window.currentGlobalAudios = {}; } audios[audio.get('id')] = audio; if(audio.get('state') == 'playing'){ return audio; } if(!audio.get('loop')){ audio.bind('end', endFunction, this); } audio.play(); return audio; },
  "getPixels": function(value){  var result = new RegExp('((\\+|\\-)?\\d+(\\.\\d*)?)(px|vw|vh|vmin|vmax)?', 'i').exec(value); if (result == undefined) { return 0; } var num = parseFloat(result[1]); var unit = result[4]; var vw = this.rootPlayer.get('actualWidth') / 100; var vh = this.rootPlayer.get('actualHeight') / 100; switch(unit) { case 'vw': return num * vw; case 'vh': return num * vh; case 'vmin': return num * Math.min(vw, vh); case 'vmax': return num * Math.max(vw, vh); default: return num; } },
  "playAudioList": function(audios){  if(audios.length == 0) return; var currentAudioCount = -1; var currentAudio; var playGlobalAudioFunction = this.playGlobalAudio; var playNext = function(){ if(++currentAudioCount >= audios.length) currentAudioCount = 0; currentAudio = audios[currentAudioCount]; playGlobalAudioFunction(currentAudio, playNext); }; playNext(); },
  "setPanoramaCameraWithSpot": function(playListItem, yaw, pitch){  var panorama = playListItem.get('media'); var newCamera = this.cloneCamera(playListItem.get('camera')); var initialPosition = newCamera.get('initialPosition'); initialPosition.set('yaw', yaw); initialPosition.set('pitch', pitch); this.startPanoramaWithCamera(panorama, newCamera); },
  "init": function(){  if(!Object.hasOwnProperty('values')) { Object.values = function(o){ return Object.keys(o).map(function(e) { return o[e]; }); }; } var history = this.get('data')['history']; var playListChangeFunc = function(e){ var playList = e.source; var index = playList.get('selectedIndex'); if(index < 0) return; var id = playList.get('id'); if(!history.hasOwnProperty(id)) history[id] = new HistoryData(playList); history[id].add(index); }; var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i) { var playList = playLists[i]; playList.bind('change', playListChangeFunc, this); } },
  "setStartTimeVideo": function(video, time){  var items = this.getPlayListItems(video); var startTimeBackup = []; var restoreStartTimeFunc = function() { for(var i = 0; i<items.length; ++i){ var item = items[i]; item.set('startTime', startTimeBackup[i]); item.unbind('stop', restoreStartTimeFunc, this); } }; for(var i = 0; i<items.length; ++i) { var item = items[i]; var player = item.get('player'); if(player.get('video') == video && player.get('state') == 'playing') { player.seek(time); } else { startTimeBackup.push(item.get('startTime')); item.set('startTime', time); item.bind('stop', restoreStartTimeFunc, this); } } },
  "pauseGlobalAudiosWhilePlayItem": function(playList, index, exclude){  var self = this; var item = playList.get('items')[index]; var media = item.get('media'); var player = item.get('player'); var caller = media.get('id'); var endFunc = function(){ if(playList.get('selectedIndex') != index) { if(hasState){ player.unbind('stateChange', stateChangeFunc, self); } self.resumeGlobalAudios(caller); } }; var stateChangeFunc = function(event){ var state = event.data.state; if(state == 'stopped'){ this.resumeGlobalAudios(caller); } else if(state == 'playing'){ this.pauseGlobalAudios(caller, exclude); } }; var mediaClass = media.get('class'); var hasState = mediaClass == 'Video360' || mediaClass == 'Video'; if(hasState){ player.bind('stateChange', stateChangeFunc, this); } this.pauseGlobalAudios(caller, exclude); this.executeFunctionWhenChange(playList, index, endFunc, endFunc); },
  "pauseCurrentPlayers": function(onlyPauseCameraIfPanorama){  var players = this.getCurrentPlayers(); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('state') == 'playing') { if(onlyPauseCameraIfPanorama && player.get('class') == 'PanoramaPlayer' && typeof player.get('video') === 'undefined'){ player.pauseCamera(); } else { player.pause(); } } else { players.splice(i, 1); } } return players; },
  "historyGoForward": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.forward(); } },
  "triggerOverlay": function(overlay, eventName){  if(overlay.get('areas') != undefined) { var areas = overlay.get('areas'); for(var i = 0; i<areas.length; ++i) { areas[i].trigger(eventName); } } else { overlay.trigger(eventName); } },
  "shareFacebook": function(url){  window.open('https://www.facebook.com/sharer/sharer.php?u=' + url, '_blank'); },
  "isCardboardViewMode": function(){  var players = this.getByClassName('PanoramaPlayer'); return players.length > 0 && players[0].get('viewMode') == 'cardboard'; },
  "updateVideoCues": function(playList, index){  var playListItem = playList.get('items')[index]; var video = playListItem.get('media'); if(video.get('cues').length == 0) return; var player = playListItem.get('player'); var cues = []; var changeFunction = function(){ if(playList.get('selectedIndex') != index){ video.unbind('cueChange', cueChangeFunction, this); playList.unbind('change', changeFunction, this); } }; var cueChangeFunction = function(event){ var activeCues = event.data.activeCues; for(var i = 0, count = cues.length; i<count; ++i){ var cue = cues[i]; if(activeCues.indexOf(cue) == -1 && (cue.get('startTime') > player.get('currentTime') || cue.get('endTime') < player.get('currentTime')+0.5)){ cue.trigger('end'); } } cues = activeCues; }; video.bind('cueChange', cueChangeFunction, this); playList.bind('change', changeFunction, this); },
  "pauseGlobalAudio": function(audio){  var audios = window.currentGlobalAudios; if(audios){ audio = audios[audio.get('id')]; } if(audio.get('state') == 'playing') audio.pause(); },
  "registerKey": function(key, value){  window[key] = value; },
  "getCurrentPlayerWithMedia": function(media){  var playerClass = undefined; var mediaPropertyName = undefined; switch(media.get('class')) { case 'Panorama': case 'LivePanorama': case 'HDRPanorama': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'panorama'; break; case 'Video360': playerClass = 'PanoramaPlayer'; mediaPropertyName = 'video'; break; case 'PhotoAlbum': playerClass = 'PhotoAlbumPlayer'; mediaPropertyName = 'photoAlbum'; break; case 'Map': playerClass = 'MapPlayer'; mediaPropertyName = 'map'; break; case 'Video': playerClass = 'VideoPlayer'; mediaPropertyName = 'video'; break; }; if(playerClass != undefined) { var players = this.getByClassName(playerClass); for(var i = 0; i<players.length; ++i){ var player = players[i]; if(player.get(mediaPropertyName) == media) { return player; } } } else { return undefined; } },
  "executeFunctionWhenChange": function(playList, index, endFunction, changeFunction){  var endObject = undefined; var changePlayListFunction = function(event){ if(event.data.previousSelectedIndex == index){ if(changeFunction) changeFunction.call(this); if(endFunction && endObject) endObject.unbind('end', endFunction, this); playList.unbind('change', changePlayListFunction, this); } }; if(endFunction){ var playListItem = playList.get('items')[index]; if(playListItem.get('class') == 'PanoramaPlayListItem'){ var camera = playListItem.get('camera'); if(camera != undefined) endObject = camera.get('initialSequence'); if(endObject == undefined) endObject = camera.get('idleSequence'); } else{ endObject = playListItem.get('media'); } if(endObject){ endObject.bind('end', endFunction, this); } } playList.bind('change', changePlayListFunction, this); },
  "getPanoramaOverlayByName": function(panorama, name){  var overlays = this.getOverlays(panorama); for(var i = 0, count = overlays.length; i<count; ++i){ var overlay = overlays[i]; var data = overlay.get('data'); if(data != undefined && data.label == name){ return overlay; } } return undefined; },
  "setComponentVisibility": function(component, visible, applyAt, effect, propertyEffect, ignoreClearTimeout){  var keepVisibility = this.getKey('keepVisibility_' + component.get('id')); if(keepVisibility) return; this.unregisterKey('visibility_'+component.get('id')); var changeVisibility = function(){ if(effect && propertyEffect){ component.set(propertyEffect, effect); } component.set('visible', visible); if(component.get('class') == 'ViewerArea'){ try{ if(visible) component.restart(); else if(component.get('playbackState') == 'playing') component.pause(); } catch(e){}; } }; var effectTimeoutName = 'effectTimeout_'+component.get('id'); if(!ignoreClearTimeout && window.hasOwnProperty(effectTimeoutName)){ var effectTimeout = window[effectTimeoutName]; if(effectTimeout instanceof Array){ for(var i=0; i<effectTimeout.length; i++){ clearTimeout(effectTimeout[i]) } }else{ clearTimeout(effectTimeout); } delete window[effectTimeoutName]; } else if(visible == component.get('visible') && !ignoreClearTimeout) return; if(applyAt && applyAt > 0){ var effectTimeout = setTimeout(function(){ if(window[effectTimeoutName] instanceof Array) { var arrayTimeoutVal = window[effectTimeoutName]; var index = arrayTimeoutVal.indexOf(effectTimeout); arrayTimeoutVal.splice(index, 1); if(arrayTimeoutVal.length == 0){ delete window[effectTimeoutName]; } }else{ delete window[effectTimeoutName]; } changeVisibility(); }, applyAt); if(window.hasOwnProperty(effectTimeoutName)){ window[effectTimeoutName] = [window[effectTimeoutName], effectTimeout]; }else{ window[effectTimeoutName] = effectTimeout; } } else{ changeVisibility(); } },
  "getActivePlayerWithViewer": function(viewerArea){  var players = this.getByClassName('PanoramaPlayer'); players = players.concat(this.getByClassName('VideoPlayer')); players = players.concat(this.getByClassName('Video360Player')); players = players.concat(this.getByClassName('PhotoAlbumPlayer')); players = players.concat(this.getByClassName('MapPlayer')); var i = players.length; while(i-- > 0){ var player = players[i]; if(player.get('viewerArea') == viewerArea) { var playerClass = player.get('class'); if(playerClass == 'PanoramaPlayer' && (player.get('panorama') != undefined || player.get('video') != undefined)) return player; else if((playerClass == 'VideoPlayer' || playerClass == 'Video360Player') && player.get('video') != undefined) return player; else if(playerClass == 'PhotoAlbumPlayer' && player.get('photoAlbum') != undefined) return player; else if(playerClass == 'MapPlayer' && player.get('map') != undefined) return player; } } return undefined; },
  "getOverlays": function(media){  switch(media.get('class')){ case 'Panorama': var overlays = media.get('overlays').concat() || []; var frames = media.get('frames'); for(var j = 0; j<frames.length; ++j){ overlays = overlays.concat(frames[j].get('overlays') || []); } return overlays; case 'Video360': case 'Map': return media.get('overlays') || []; default: return []; } },
  "syncPlaylists": function(playLists){  var changeToMedia = function(media, playListDispatched){ for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(playList != playListDispatched){ var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ if(items[j].get('media') == media){ if(playList.get('selectedIndex') != j){ playList.set('selectedIndex', j); } break; } } } } }; var changeFunction = function(event){ var playListDispatched = event.source; var selectedIndex = playListDispatched.get('selectedIndex'); if(selectedIndex < 0) return; var media = playListDispatched.get('items')[selectedIndex].get('media'); changeToMedia(media, playListDispatched); }; var mapPlayerChangeFunction = function(event){ var panoramaMapLocation = event.source.get('panoramaMapLocation'); if(panoramaMapLocation){ var map = panoramaMapLocation.get('map'); changeToMedia(map); } }; for(var i = 0, count = playLists.length; i<count; ++i){ playLists[i].bind('change', changeFunction, this); } var mapPlayers = this.getByClassName('MapPlayer'); for(var i = 0, count = mapPlayers.length; i<count; ++i){ mapPlayers[i].bind('panoramaMapLocation_change', mapPlayerChangeFunction, this); } },
  "getMediaHeight": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxH=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('height') > maxH) maxH = r.get('height'); } return maxH; }else{ return r.get('height') } default: return media.get('height'); } },
  "setMediaBehaviour": function(playList, index, mediaDispatcher){  var self = this; var stateChangeFunction = function(event){ if(event.data.state == 'stopped'){ dispose.call(this, true); } }; var onBeginFunction = function() { item.unbind('begin', onBeginFunction, self); var media = item.get('media'); if(media.get('class') != 'Panorama' || (media.get('camera') != undefined && media.get('camera').get('initialSequence') != undefined)){ player.bind('stateChange', stateChangeFunction, self); } }; var changeFunction = function(){ var index = playListDispatcher.get('selectedIndex'); if(index != -1){ indexDispatcher = index; dispose.call(this, false); } }; var disposeCallback = function(){ dispose.call(this, false); }; var dispose = function(forceDispose){ if(!playListDispatcher) return; var media = item.get('media'); if((media.get('class') == 'Video360' || media.get('class') == 'Video') && media.get('loop') == true && !forceDispose) return; playList.set('selectedIndex', -1); if(panoramaSequence && panoramaSequenceIndex != -1){ if(panoramaSequence) { if(panoramaSequenceIndex > 0 && panoramaSequence.get('movements')[panoramaSequenceIndex-1].get('class') == 'TargetPanoramaCameraMovement'){ var initialPosition = camera.get('initialPosition'); var oldYaw = initialPosition.get('yaw'); var oldPitch = initialPosition.get('pitch'); var oldHfov = initialPosition.get('hfov'); var previousMovement = panoramaSequence.get('movements')[panoramaSequenceIndex-1]; initialPosition.set('yaw', previousMovement.get('targetYaw')); initialPosition.set('pitch', previousMovement.get('targetPitch')); initialPosition.set('hfov', previousMovement.get('targetHfov')); var restoreInitialPositionFunction = function(event){ initialPosition.set('yaw', oldYaw); initialPosition.set('pitch', oldPitch); initialPosition.set('hfov', oldHfov); itemDispatcher.unbind('end', restoreInitialPositionFunction, this); }; itemDispatcher.bind('end', restoreInitialPositionFunction, this); } panoramaSequence.set('movementIndex', panoramaSequenceIndex); } } if(player){ item.unbind('begin', onBeginFunction, this); player.unbind('stateChange', stateChangeFunction, this); for(var i = 0; i<buttons.length; ++i) { buttons[i].unbind('click', disposeCallback, this); } } if(sameViewerArea){ var currentMedia = this.getMediaFromPlayer(player); if(currentMedia == undefined || currentMedia == item.get('media')){ playListDispatcher.set('selectedIndex', indexDispatcher); } if(playList != playListDispatcher) playListDispatcher.unbind('change', changeFunction, this); } else{ viewerArea.set('visible', viewerVisibility); } playListDispatcher = undefined; }; var mediaDispatcherByParam = mediaDispatcher != undefined; if(!mediaDispatcher){ var currentIndex = playList.get('selectedIndex'); var currentPlayer = (currentIndex != -1) ? playList.get('items')[playList.get('selectedIndex')].get('player') : this.getActivePlayerWithViewer(this.MainViewer); if(currentPlayer) { mediaDispatcher = this.getMediaFromPlayer(currentPlayer); } } var playListDispatcher = mediaDispatcher ? this.getPlayListWithMedia(mediaDispatcher, true) : undefined; if(!playListDispatcher){ playList.set('selectedIndex', index); return; } var indexDispatcher = playListDispatcher.get('selectedIndex'); if(playList.get('selectedIndex') == index || indexDispatcher == -1){ return; } var item = playList.get('items')[index]; var itemDispatcher = playListDispatcher.get('items')[indexDispatcher]; var player = item.get('player'); var viewerArea = player.get('viewerArea'); var viewerVisibility = viewerArea.get('visible'); var sameViewerArea = viewerArea == itemDispatcher.get('player').get('viewerArea'); if(sameViewerArea){ if(playList != playListDispatcher){ playListDispatcher.set('selectedIndex', -1); playListDispatcher.bind('change', changeFunction, this); } } else{ viewerArea.set('visible', true); } var panoramaSequenceIndex = -1; var panoramaSequence = undefined; var camera = itemDispatcher.get('camera'); if(camera){ panoramaSequence = camera.get('initialSequence'); if(panoramaSequence) { panoramaSequenceIndex = panoramaSequence.get('movementIndex'); } } playList.set('selectedIndex', index); var buttons = []; var addButtons = function(property){ var value = player.get(property); if(value == undefined) return; if(Array.isArray(value)) buttons = buttons.concat(value); else buttons.push(value); }; addButtons('buttonStop'); for(var i = 0; i<buttons.length; ++i) { buttons[i].bind('click', disposeCallback, this); } if(player != itemDispatcher.get('player') || !mediaDispatcherByParam){ item.bind('begin', onBeginFunction, self); } this.executeFunctionWhenChange(playList, index, disposeCallback); },
  "historyGoBack": function(playList){  var history = this.get('data')['history'][playList.get('id')]; if(history != undefined) { history.back(); } },
  "existsKey": function(key){  return key in window; },
  "autotriggerAtStart": function(playList, callback, once){  var onChange = function(event){ callback(); if(once == true) playList.unbind('change', onChange, this); }; playList.bind('change', onChange, this); },
  "getPlayListWithMedia": function(media, onlySelected){  var playLists = this.getByClassName('PlayList'); for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; if(onlySelected && playList.get('selectedIndex') == -1) continue; if(this.getPlayListItemByMedia(playList, media) != undefined) return playList; } return undefined; },
  "stopAndGoCamera": function(camera, ms){  var sequence = camera.get('initialSequence'); sequence.pause(); var timeoutFunction = function(){ sequence.play(); }; setTimeout(timeoutFunction, ms); },
  "playGlobalAudioWhilePlay": function(playList, index, audio, endCallback){  var changeFunction = function(event){ if(event.data.previousSelectedIndex == index){ this.stopGlobalAudio(audio); if(isPanorama) { var media = playListItem.get('media'); var audios = media.get('audios'); audios.splice(audios.indexOf(audio), 1); media.set('audios', audios); } playList.unbind('change', changeFunction, this); if(endCallback) endCallback(); } }; var audios = window.currentGlobalAudios; if(audios && audio.get('id') in audios){ audio = audios[audio.get('id')]; if(audio.get('state') != 'playing'){ audio.play(); } return audio; } playList.bind('change', changeFunction, this); var playListItem = playList.get('items')[index]; var isPanorama = playListItem.get('class') == 'PanoramaPlayListItem'; if(isPanorama) { var media = playListItem.get('media'); var audios = (media.get('audios') || []).slice(); if(audio.get('class') == 'MediaAudio') { var panoramaAudio = this.rootPlayer.createInstance('PanoramaAudio'); panoramaAudio.set('autoplay', false); panoramaAudio.set('audio', audio.get('audio')); panoramaAudio.set('loop', audio.get('loop')); panoramaAudio.set('id', audio.get('id')); var stateChangeFunctions = audio.getBindings('stateChange'); for(var i = 0; i<stateChangeFunctions.length; ++i){ var f = stateChangeFunctions[i]; if(typeof f == 'string') f = new Function('event', f); panoramaAudio.bind('stateChange', f, this); } audio = panoramaAudio; } audios.push(audio); media.set('audios', audios); } return this.playGlobalAudio(audio, endCallback); },
  "loadFromCurrentMediaPlayList": function(playList, delta){  var currentIndex = playList.get('selectedIndex'); var totalItems = playList.get('items').length; var newIndex = (currentIndex + delta) % totalItems; while(newIndex < 0){ newIndex = totalItems + newIndex; }; if(currentIndex != newIndex){ playList.set('selectedIndex', newIndex); } },
  "showComponentsWhileMouseOver": function(parentComponent, components, durationVisibleWhileOut){  var setVisibility = function(visible){ for(var i = 0, length = components.length; i<length; i++){ var component = components[i]; if(component.get('class') == 'HTMLText' && (component.get('html') == '' || component.get('html') == undefined)) { continue; } component.set('visible', visible); } }; if (this.rootPlayer.get('touchDevice') == true){ setVisibility(true); } else { var timeoutID = -1; var rollOverFunction = function(){ setVisibility(true); if(timeoutID >= 0) clearTimeout(timeoutID); parentComponent.unbind('rollOver', rollOverFunction, this); parentComponent.bind('rollOut', rollOutFunction, this); }; var rollOutFunction = function(){ var timeoutFunction = function(){ setVisibility(false); parentComponent.unbind('rollOver', rollOverFunction, this); }; parentComponent.unbind('rollOut', rollOutFunction, this); parentComponent.bind('rollOver', rollOverFunction, this); timeoutID = setTimeout(timeoutFunction, durationVisibleWhileOut); }; parentComponent.bind('rollOver', rollOverFunction, this); } },
  "setMainMediaByName": function(name){  var items = this.mainPlayList.get('items'); for(var i = 0; i<items.length; ++i){ var item = items[i]; if(item.get('media').get('label') == name) { this.mainPlayList.set('selectedIndex', i); return item; } } },
  "initGA": function(){  var sendFunc = function(category, event, label) { ga('send', 'event', category, event, label); }; var media = this.getByClassName('Panorama'); media = media.concat(this.getByClassName('Video360')); media = media.concat(this.getByClassName('Map')); for(var i = 0, countI = media.length; i<countI; ++i){ var m = media[i]; var mediaLabel = m.get('label'); var overlays = this.getOverlays(m); for(var j = 0, countJ = overlays.length; j<countJ; ++j){ var overlay = overlays[j]; var overlayLabel = overlay.get('data') != undefined ? mediaLabel + ' - ' + overlay.get('data')['label'] : mediaLabel; switch(overlay.get('class')) { case 'HotspotPanoramaOverlay': case 'HotspotMapOverlay': var areas = overlay.get('areas'); for (var z = 0; z<areas.length; ++z) { areas[z].bind('click', sendFunc.bind(this, 'Hotspot', 'click', overlayLabel), this); } break; case 'CeilingCapPanoramaOverlay': case 'TripodCapPanoramaOverlay': overlay.bind('click', sendFunc.bind(this, 'Cap', 'click', overlayLabel), this); break; } } } var components = this.getByClassName('Button'); components = components.concat(this.getByClassName('IconButton')); for(var i = 0, countI = components.length; i<countI; ++i){ var c = components[i]; var componentLabel = c.get('data')['name']; c.bind('click', sendFunc.bind(this, 'Skin', 'click', componentLabel), this); } var items = this.getByClassName('PlayListItem'); var media2Item = {}; for(var i = 0, countI = items.length; i<countI; ++i) { var item = items[i]; var media = item.get('media'); if(!(media.get('id') in media2Item)) { item.bind('begin', sendFunc.bind(this, 'Media', 'play', media.get('label')), this); media2Item[media.get('id')] = item; } } },
  "getMediaWidth": function(media){  switch(media.get('class')){ case 'Video360': var res = media.get('video'); if(res instanceof Array){ var maxW=0; for(var i=0; i<res.length; i++){ var r = res[i]; if(r.get('width') > maxW) maxW = r.get('width'); } return maxW; }else{ return r.get('width') } default: return media.get('width'); } },
  "cloneCamera": function(camera){  var newCamera = this.rootPlayer.createInstance(camera.get('class')); newCamera.set('id', camera.get('id') + '_copy'); newCamera.set('idleSequence', camera.get('initialSequence')); return newCamera; },
  "showPopupImage": function(image, toggleImage, customWidth, customHeight, showEffect, hideEffect, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedCallback, hideCallback){  var self = this; var closed = false; var playerClickFunction = function() { zoomImage.unbind('loaded', loadedFunction, self); hideFunction(); }; var clearAutoClose = function(){ zoomImage.unbind('click', clearAutoClose, this); if(timeoutID != undefined){ clearTimeout(timeoutID); } }; var resizeFunction = function(){ setTimeout(setCloseButtonPosition, 0); }; var loadedFunction = function(){ self.unbind('click', playerClickFunction, self); veil.set('visible', true); setCloseButtonPosition(); closeButton.set('visible', true); zoomImage.unbind('loaded', loadedFunction, this); zoomImage.bind('userInteractionStart', userInteractionStartFunction, this); zoomImage.bind('userInteractionEnd', userInteractionEndFunction, this); zoomImage.bind('resize', resizeFunction, this); timeoutID = setTimeout(timeoutFunction, 200); }; var timeoutFunction = function(){ timeoutID = undefined; if(autoCloseMilliSeconds){ var autoCloseFunction = function(){ hideFunction(); }; zoomImage.bind('click', clearAutoClose, this); timeoutID = setTimeout(autoCloseFunction, autoCloseMilliSeconds); } zoomImage.bind('backgroundClick', hideFunction, this); if(toggleImage) { zoomImage.bind('click', toggleFunction, this); zoomImage.set('imageCursor', 'hand'); } closeButton.bind('click', hideFunction, this); if(loadedCallback) loadedCallback(); }; var hideFunction = function() { self.MainViewer.set('toolTipEnabled', true); closed = true; if(timeoutID) clearTimeout(timeoutID); if (timeoutUserInteractionID) clearTimeout(timeoutUserInteractionID); if(autoCloseMilliSeconds) clearAutoClose(); if(hideCallback) hideCallback(); zoomImage.set('visible', false); if(hideEffect && hideEffect.get('duration') > 0){ hideEffect.bind('end', endEffectFunction, this); } else{ zoomImage.set('image', null); } closeButton.set('visible', false); veil.set('visible', false); self.unbind('click', playerClickFunction, self); zoomImage.unbind('backgroundClick', hideFunction, this); zoomImage.unbind('userInteractionStart', userInteractionStartFunction, this); zoomImage.unbind('userInteractionEnd', userInteractionEndFunction, this, true); zoomImage.unbind('resize', resizeFunction, this); if(toggleImage) { zoomImage.unbind('click', toggleFunction, this); zoomImage.set('cursor', 'default'); } closeButton.unbind('click', hideFunction, this); self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } }; var endEffectFunction = function() { zoomImage.set('image', null); hideEffect.unbind('end', endEffectFunction, this); }; var toggleFunction = function() { zoomImage.set('image', isToggleVisible() ? image : toggleImage); }; var isToggleVisible = function() { return zoomImage.get('image') == toggleImage; }; var setCloseButtonPosition = function() { var right = zoomImage.get('actualWidth') - zoomImage.get('imageLeft') - zoomImage.get('imageWidth') + 10; var top = zoomImage.get('imageTop') + 10; if(right < 10) right = 10; if(top < 10) top = 10; closeButton.set('right', right); closeButton.set('top', top); }; var userInteractionStartFunction = function() { if(timeoutUserInteractionID){ clearTimeout(timeoutUserInteractionID); timeoutUserInteractionID = undefined; } else{ closeButton.set('visible', false); } }; var userInteractionEndFunction = function() { if(!closed){ timeoutUserInteractionID = setTimeout(userInteractionTimeoutFunction, 300); } }; var userInteractionTimeoutFunction = function() { timeoutUserInteractionID = undefined; closeButton.set('visible', true); setCloseButtonPosition(); }; this.MainViewer.set('toolTipEnabled', false); var veil = this.veilPopupPanorama; var zoomImage = this.zoomImagePopupPanorama; var closeButton = this.closeButtonPopupPanorama; if(closeButtonProperties){ for(var key in closeButtonProperties){ closeButton.set(key, closeButtonProperties[key]); } } var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } var timeoutID = undefined; var timeoutUserInteractionID = undefined; zoomImage.bind('loaded', loadedFunction, this); setTimeout(function(){ self.bind('click', playerClickFunction, self, false); }, 0); zoomImage.set('image', image); zoomImage.set('customWidth', customWidth); zoomImage.set('customHeight', customHeight); zoomImage.set('showEffect', showEffect); zoomImage.set('hideEffect', hideEffect); zoomImage.set('visible', true); return zoomImage; },
  "showPopupPanoramaOverlay": function(popupPanoramaOverlay, closeButtonProperties, imageHD, toggleImage, toggleImageHD, autoCloseMilliSeconds, audio, stopBackgroundAudio){  var self = this; this.MainViewer.set('toolTipEnabled', false); var cardboardEnabled = this.isCardboardViewMode(); if(!cardboardEnabled) { var zoomImage = this.zoomImagePopupPanorama; var showDuration = popupPanoramaOverlay.get('showDuration'); var hideDuration = popupPanoramaOverlay.get('hideDuration'); var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); var popupMaxWidthBackup = popupPanoramaOverlay.get('popupMaxWidth'); var popupMaxHeightBackup = popupPanoramaOverlay.get('popupMaxHeight'); var showEndFunction = function() { var loadedFunction = function(){ if(!self.isCardboardViewMode()) popupPanoramaOverlay.set('visible', false); }; popupPanoramaOverlay.unbind('showEnd', showEndFunction, self); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', 1); self.showPopupImage(imageHD, toggleImageHD, popupPanoramaOverlay.get('popupMaxWidth'), popupPanoramaOverlay.get('popupMaxHeight'), null, null, closeButtonProperties, autoCloseMilliSeconds, audio, stopBackgroundAudio, loadedFunction, hideFunction); }; var hideFunction = function() { var restoreShowDurationFunction = function(){ popupPanoramaOverlay.unbind('showEnd', restoreShowDurationFunction, self); popupPanoramaOverlay.set('visible', false); popupPanoramaOverlay.set('showDuration', showDuration); popupPanoramaOverlay.set('popupMaxWidth', popupMaxWidthBackup); popupPanoramaOverlay.set('popupMaxHeight', popupMaxHeightBackup); }; self.resumePlayers(playersPaused, audio == null || !stopBackgroundAudio); var currentWidth = zoomImage.get('imageWidth'); var currentHeight = zoomImage.get('imageHeight'); popupPanoramaOverlay.bind('showEnd', restoreShowDurationFunction, self, true); popupPanoramaOverlay.set('showDuration', 1); popupPanoramaOverlay.set('hideDuration', hideDuration); popupPanoramaOverlay.set('popupMaxWidth', currentWidth); popupPanoramaOverlay.set('popupMaxHeight', currentHeight); if(popupPanoramaOverlay.get('visible')) restoreShowDurationFunction(); else popupPanoramaOverlay.set('visible', true); self.MainViewer.set('toolTipEnabled', true); }; if(!imageHD){ imageHD = popupPanoramaOverlay.get('image'); } if(!toggleImageHD && toggleImage){ toggleImageHD = toggleImage; } popupPanoramaOverlay.bind('showEnd', showEndFunction, this, true); } else { var hideEndFunction = function() { self.resumePlayers(playersPaused, audio == null || stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ self.resumeGlobalAudios(); } self.stopGlobalAudio(audio); } popupPanoramaOverlay.unbind('hideEnd', hideEndFunction, self); self.MainViewer.set('toolTipEnabled', true); }; var playersPaused = this.pauseCurrentPlayers(audio == null || !stopBackgroundAudio); if(audio){ if(stopBackgroundAudio){ this.pauseGlobalAudios(); } this.playGlobalAudio(audio); } popupPanoramaOverlay.bind('hideEnd', hideEndFunction, this, true); } popupPanoramaOverlay.set('visible', true); },
  "shareTwitter": function(url){  window.open('https://twitter.com/intent/tweet?source=webclient&url=' + url, '_blank'); },
  "startPanoramaWithCamera": function(media, camera){  if(window.currentPanoramasWithCameraChanged != undefined && window.currentPanoramasWithCameraChanged.indexOf(media) != -1){ return; } var playLists = this.getByClassName('PlayList'); if(playLists.length == 0) return; var restoreItems = []; for(var i = 0, count = playLists.length; i<count; ++i){ var playList = playLists[i]; var items = playList.get('items'); for(var j = 0, countJ = items.length; j<countJ; ++j){ var item = items[j]; if(item.get('media') == media && (item.get('class') == 'PanoramaPlayListItem' || item.get('class') == 'Video360PlayListItem')){ restoreItems.push({camera: item.get('camera'), item: item}); item.set('camera', camera); } } } if(restoreItems.length > 0) { if(window.currentPanoramasWithCameraChanged == undefined) { window.currentPanoramasWithCameraChanged = [media]; } else { window.currentPanoramasWithCameraChanged.push(media); } var restoreCameraOnStop = function(){ var index = window.currentPanoramasWithCameraChanged.indexOf(media); if(index != -1) { window.currentPanoramasWithCameraChanged.splice(index, 1); } for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.set('camera', restoreItems[i].camera); restoreItems[i].item.unbind('stop', restoreCameraOnStop, this); } }; for (var i = 0; i < restoreItems.length; i++) { restoreItems[i].item.bind('stop', restoreCameraOnStop, this); } } },
  "keepComponentVisibility": function(component, keep){  var key = 'keepVisibility_' + component.get('id'); var value = this.getKey(key); if(value == undefined && keep) { this.registerKey(key, keep); } else if(value != undefined && !keep) { this.unregisterKey(key); } },
  "setStartTimeVideoSync": function(video, player){  this.setStartTimeVideo(video, player.get('currentTime')); },
  "openLink": function(url, name){  if(url == location.href) { return; } var isElectron = (window && window.process && window.process.versions && window.process.versions['electron']) || (navigator && navigator.userAgent && navigator.userAgent.indexOf('Electron') >= 0); if (name == '_blank' && isElectron) { if (url.startsWith('/')) { var r = window.location.href.split('/'); r.pop(); url = r.join('/') + url; } var extension = url.split('.').pop().toLowerCase(); if(extension != 'pdf' || url.startsWith('file://')) { var shell = window.require('electron').shell; shell.openExternal(url); } else { window.open(url, name); } } else if(isElectron && (name == '_top' || name == '_self')) { window.location = url; } else { var newWindow = window.open(url, name); newWindow.focus(); } },
  "getKey": function(key){  return window[key]; }
 },
 "width": "100%",
 "scrollBarMargin": 2,
 "contentOpaque": false,
 "paddingRight": 0,
 "downloadEnabled": false,
 "paddingLeft": 0,
 "verticalAlign": "top",
 "height": "100%",
 "paddingTop": 0,
 "borderRadius": 0,
 "gap": 10,
 "paddingBottom": 0,
 "mouseWheelEnabled": true,
 "scrollBarWidth": 10,
 "propagateClick": false,
 "overflow": "visible",
 "desktopMipmappingEnabled": false
};

    
    function HistoryData(playList) {
        this.playList = playList;
        this.list = [];
        this.pointer = -1;
    }

    HistoryData.prototype.add = function(index){
        if(this.pointer < this.list.length && this.list[this.pointer] == index) {
            return;
        }
        ++this.pointer;
        this.list.splice(this.pointer, this.list.length - this.pointer, index);
    };

    HistoryData.prototype.back = function(){
        if(!this.canBack()) return;
        this.playList.set('selectedIndex', this.list[--this.pointer]);
    };

    HistoryData.prototype.forward = function(){
        if(!this.canForward()) return;
        this.playList.set('selectedIndex', this.list[++this.pointer]);
    };

    HistoryData.prototype.canBack = function(){
        return this.pointer > 0;
    };

    HistoryData.prototype.canForward = function(){
        return this.pointer >= 0 && this.pointer < this.list.length-1;
    };
    //

    if(script.data == undefined)
        script.data = {};
    script.data["history"] = {};    //playListID -> HistoryData

    TDV.PlayerAPI.defineScript(script);
})();
