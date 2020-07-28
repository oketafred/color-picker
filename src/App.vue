<template>
  <div id="app">
    <NavBar/>
    <div class="container-fluid">
  <div class="row">
    <div 
    v-for="color in colors" 
    :key="color.index" 
    class="col-md-2 color-box" 
    :style="{backgroundColor: color}">
    </div>
  </div>
</div>
  </div>
</template>

<script>
import NavBar from './components/NavBar.vue'

export default {
  name: 'App',
  components: {
    NavBar
  },
  data() {
    return {
      colors: [	
        // "#C91F37",,
        "#DC3023",
        // COCHINEAL RED
        "#9D2933",
        // MONZA
        "#CF000F",
        // BREWED MUSTARD-BROWN
        "#E68364",
        // POMEGRANATE
        "#F22613",
        // SCARLET
        "#CF3A24",
        // PURE CRIMSON
        "#C3272B",
        // TRUE RED
        "#8F1D21",
        // CHESTNUT ROSE
        "#D24D57",
        // ONE KIN DYE
        "#F08F90",
        // PEACH-COLORED
        "#F47983",
        // RED PLUM COLORED
        "#DB5A6B",
        // MEDIUM CRIMSON
        "#C93756",
        // CHERRY BLOSSOM COLOR
        "#FCC9B9",
        // WASHED-OUT CRIMSON
        "#FFB3A7",
        // RADICAL RED
        "#F62459",
        // IBIS WING COLOR
        "#F58F84",
        // WISTERIA PURPLE
        "#875F9A",
        // BELLFLOWER COLOR
        "#5D3F6A",
        // WISTERIA COLOR
        "#89729E",
        // IRIS COLOR
        "#763568",
        // TATARIAN ASTER COLOR
        "#8D608C",
        // THIN COLOR
        "#A87CA0",
        // VIOLET COLOR
        "#5B3256",
        // MEDIUM PURPLE
        "#BF55EC",
        // STUDIO
        "#8E44AD",
        // WISTERIA
        "#9B59B6",
        // LIGHT WISTERIA
        "#BE90D4",
        // SKY COLOR
        "#4D8FAC",
        // ULTRAMARINE COLOR
        "#5D8CAE",
        // PICTON BLUE
        "#22A7F0",
        // DODGER BLUE
        "#19B5FE",
        // PICTON BLUE
        "#59ABE3",
        // LIGHT BLUE COLOR
        "#48929B",
        // THOUSAND HERB
        "#317589",
        // JORDY BLUE
        "#89C4F4",
        // STEEL BLUE
        "#4B77BE",
        // LAPIS LAZULI COLOR
        "#1F4788",
        // NAVY BLUE COLOR
        "#003171",
        // HANADA
        "#044F67",
        // INDIGO COLOR
        "#264348",
        // SISKIN SPROUT YELLOW
        "#7A942E",
        // YOUNG GREEN ONION
        "#8DB255",
        // FRESH ONION
        "#5B8930",
        // YOUNG BAMBOO COLOR
        "#6B9362",
        // PATINA
        "#407A52",
        // GREEN BAMBOO
        "#006442",
        // GOSSIP
        "#87D37C",
        // EUCALYPTUS
        "#26A65B",
        // JUNGLE GREEN
        "#26C281",
        // OBSERVATORY
        "#049372",
        // JUNGLE GREEN
        "#2ABB9B",
        // MOUNTAIN MEADOW
        "#16A085",
        // TURQUOISE
        "#36D7B7",
        // FREE SPEECH AQUAMARINE
        "#03A678",
        // OCEAN GREEN
        "#4DAF7C",
        // PATRINIA FLOWERS
        "#D9B611",
        // AMUR CORK TREE
        "#F3C13A",
        // RIPE LEMON
        "#F7CA18",
        // JAPANESE TRIANDRA GRASS
        "#E2B13C",
        // RAPESEED OIL-COLORED
        "#A17917",
        // CREAM CAN
        "#F5D76E",
        // SAFFRON
        "#F4D03F",
        // BRIGHT GOLDEN YELLOW
        "#FFA400",
        // SUMAC-DYED
        "#E08A1E",
        // GAMBOGE
        "#FFB61E",
        // CORN-COLORED
        "#FAA945",
        // EGG-COLORED
        "#FFA631",
        // FLORAL LEAF-COLORED
        "#FFB94E",
        // GOLDEN FALLEN LEAVES
        "#E29C45",
        // ECSTASY
        "#F9690E",
        // AMBER
        "#CA6924",
        // LIGHTNING YELLOW
        "#F5AB35",
        // SILVER
        "#BFBFBF",
        // CARARRA
        "#F2F1EF",
        // SILVER SAND
        "#BDC3C7",
        // PORCELAIN
        "#ECF0F1",
        // PUMICE
        "#D2D7D3",
        // HARBOR RAT
        "#757D75",
        // GALLERY
        "#EEEEEE",
        // EDWARD
        "#ABB7B7",
        // LYNCH
        "#6C7A89",
        // CASCADE
        "#95A5A6",
        // Black & White
        "#000000",
        "#FFFFFF",
        // Gray
        "#F7FAFC",
        "#EDF2F7",
        "#E2E8F0",
        "#CBD5E0",
        "#A0AEC0",
        "#718096",
        "#4A5568",
        "#2D3748",
        "#1A202C",
        // Red
        "#FFF5F5",
        "#FED7D7",
        "#FEB2B2",
        "#FC8181",
        "#F56565",
        "#E53E3E",
        "#C53030",
        "#9B2C2C",
        "#742A2A",
        // Orange
        "#FFFAF0",
        "#FEEBC8",
        "#FBD38D",
        "#F6AD55",
        "#ED8936",
        "#DD6B20",
        "#C05621",
        "#9C4221",
        "#7B341E",
        // Yellow
        "#FFFFF0",
        "#FEFCBF",
        "#FAF089",
        "#F6E05E",
        "#ECC94B",
        "#D69E2E",
        "#B7791F",
        "#975A16",
        "#744210",
        // Green
        "#F0FFF4",
        "#C6F6D5",
        "#9AE6B4",
        "#68D391",
        "#48BB78",
        "#38A169",
        "#2F855A",
        "#276749",
        "#22543D",
        // Teal
        "#E6FFFA",
        "#B2F5EA",
        "#81E6D9",
        "#4FD1C5",
        "#38B2AC",
        "#319795",
        "#2C7A7B",
        "#285E61",
        "#234E52",
        // Blue
        "#EBF8FF",
        "#BEE3F8",
        "#90CDF4",
        "#63B3ED",
        "#4299E1",
        "#3182CE",
        "#2B6CB0",
        "#2C5282",
        "#2A4365",
        // Indigo
        "#EBF4FF",
        "#C3DAFE",
        "#A3BFFA",
        "#7F9CF5",
        "#667EEA",
        "#5A67D8",
        "#4C51BF",
        "#434190",
        "#3C366B",
        // Purple
        "#FAF5FF",
        "#E9D8FD",
        "#D6BCFA",
        "#B794F4",
        "#9F7AEA",
        "#805AD5",
        "#6B46C1",
        "#553C9A",
        "#44337A",
        // Pink
        "#FFF5F7",
        "#FED7E2",
        "#FBB6CE",
        "#F687B3",
        "#ED64A6",
        "#D53F8C",
        "#B83280",
        "#97266D",
        "#702459",
      ]

    }
  },
}
</script>

<style>
body {
  min-height: 100vh;
  padding-top: 3.5rem;
}
.color-box {
  width: 20%;
  height: 250px;
}
.color-box:hover {
  z-index: 999 !important;
  cursor: pointer !important;
}
</style>
