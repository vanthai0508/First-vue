<template>
    <div class="mainn">

        <div class="con">
            <div class="menu">
                <ul class="nav-items">
                    <li @click="selectTool('pencil', $event)" title="Pencil">Pencil</li>
                    <li @click="selectTool('eraser', $event)" title="Eraser">Eraser</li>
                    <li @click="selectTool('line', $event)" title="Line">Line</li>
                    <li @click="selectTool('rect', $event)" title="Rectangle">Rectangle</li>
                    <li @click="selectTool('circle', $event)" title="Circle">Circle</li>
                    <li @click="selectTool('arrow', $event)" title="Arrow">Arrow</li>
                </ul>
            </div>
            <img
                src="https://www.shutterstock.com/shutterstock/photos/2177806877/display_1500/stock-photo-aerial-view-of-the-golden-bridge-is-lifted-by-two-giant-hands-in-the-tourist-resort-on-ba-na-hill-2177806877.jpg">
            <div class="svgg" v-html="svgData">
            </div>
            <div class="data-svg">
                <svg class="artboard-pencil" @mousemove="move" @mousedown="start">

                    <template v-for="tool in art">
                        <rect v-if="tool.tool == 'rect'" :x="tool.x" :y="tool.y" :width="tool.width"
                            :height="tool.height" :rx="tool.radius" :ry="tool.radius" :style="{
                        fill: tool.fill, stroke: tool.stroke, 'stroke-width': tool.strokeWidth,
                        transform: `rotate(${tool.rotate}deg)`
                    }" />

                        <polyline v-if="tool.tool == 'polyline'" :points="tool.points" :style="{
                        fill: 'none',
                        stroke: tool.stroke,
                        'stroke-width': tool.width
                    }" />

                        <line v-if="tool.tool == 'line'" :x1="tool.x1" :y1="tool.y1" :x2="tool.x2" :y2="tool.y2" :style="{
                        stroke: tool.stroke, 'stroke-width': tool.strokeWidth, 'stroke-linecap': tool.linecap,
                        transform: `rotate(${tool.rotate}deg)`
                    }" />

                        <rect v-if="tool.tool == 'rect'" :x="tool.x" :y="tool.y" :width="tool.width"
                            :height="tool.height" :rx="tool.radius" :ry="tool.radius" :fill="tool.fill" :style="{
                        fill: 'none',
                        stroke: tool.stroke, 'stroke-width': tool.strokeWidth,
                        transform: `rotate(${tool.rotate}deg)`
                    }" />

                        <polygon v-if="tool.tool == 'polygon'" points="250,75 240,70 240,80" style="fill:black;" />

                        <circle v-if="tool.tool == 'circle'" :cx="tool.x" :cy="tool.y" :r="tool.radius"
                            :stroke="tool.stroke" :stroke-width="tool.strokeWidth" :fill="tool.fill" />
                    </template>
                </svg>
            </div>
        </div>




    </div>
</template>

<script>
import { ref, reactive } from 'vue';
export default {
    setup() {
        const art = ref([]);
        const strokeWidth = ref(5);
        const stroke = ref('#ff0000')
        const svgData = ref('<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="-40 -40 80 80"><circle r="39" /><path d="M0,38a38,38 0 0 1 0,-76a19,19 0 0 1 0,38a19,19 0 0 0 0,38" fill="#fff" /><circle cy="19" r="5" fill="#fff" /><circle cy="-19" r="5" /></svg>')


        const tool = ref('pencil');
        const selectTool = (toolSelect, event) => {
            tool.value = toolSelect
        }

        const start = (event) => {
            switch (tool.value) {
                case 'pencil': startPencil(event); break;
                case 'line': startLine(event); break;
                case 'rect': startRect(event); break;
                case 'circle': startCircle(event); break;
                case 'arrow': startArrow(event); break;
            }
        }

        const startPencil = (event) => {
            // console.log('start pen');
            art.value.push({
                tool: 'polyline',
                points: `${event.clientX - 55},${event.clientY} `,
                width: strokeWidth.value != 0 ? strokeWidth.value : 1,
                stroke: stroke.value
            })
        }

        const linecap = ref('butt');
        const startLine = (event) => {
            art.value.push({
                tool: 'line',
                x1: event.clientX - 55, y1: event.clientY,
                x2: event.clientX - 55, y2: event.clientY,
                stroke: stroke.value,
                strokeWidth: strokeWidth.value != 0 ? strokeWidth.value : 1,      // line should at least have 1 stroke width
                linecap: linecap.value,
                rotate: 0
            });
        }

        const fill = ref('none');
        const startRect = (event) => {
            art.value.push({
                tool: 'rect',
                x: event.clientX - 55, y: event.clientY,
                width: 0, height: 0,
                stroke: stroke.value,
                fill: fill.value,
                strokeWidth: strokeWidth.value,
                radius: 0,
                rotate: 0
            });
        }

        const startCircle = (event) => {
            art.value.push({
                tool: 'circle',
                x: event.clientX - 55, y: event.clientY,
                stroke: stroke.value,
                fill: fill.value,
                strokeWidth: strokeWidth.value,
                radius: 0
            });
        }

        const startArrow = (event) => {
            art.value.push({
                tool: 'line',
                x1: event.clientX - 55, y1: event.clientY,
                x2: event.clientX - 55, y2: event.clientY,
                stroke: stroke.value,
                strokeWidth: strokeWidth.value != 0 ? strokeWidth.value : 1,      // line should at least have 1 stroke width
                linecap: linecap.value,
                rotate: 0
            });

            // art.value.push({
            //     tool: 'polygon',
            //     points: 
            // });

        }

        const move = (event) => {
            // console.log('move', art.value);
            switch (tool.value) {
                case 'pencil': drawPencil(event); break;
                case 'line': drawLine(event); break;
                case 'rect': drawRect(event); break;
                case 'circle': drawCircle(event); break;
                case 'arrow': drawArrow(event); break;
            }

        }

        const drawPencil = (event) => {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastLine = art.value[art.value.length - 1];
                lastLine.points += `${event.clientX - 55},${event.clientY} `;
            }
        }

        const drawLine = (event) => {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastLine = art.value[art.value.length - 1];
                lastLine.x2 = event.clientX - 55;
                lastLine.y2 = event.clientY;
            }
        }

        const drawRect = (event) => {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastRect = art.value[art.value.length - 1];
                if ((event.clientX - 55) - (lastRect.x) > 0 && event.clientY - lastRect.y > 0) {
                    lastRect.width = (event.clientX - 55) - (lastRect.x);
                    lastRect.height = event.clientY - lastRect.y;
                }
            }
        }

        const drawCircle = (event) => {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastCircle = art.value[art.value.length - 1];

                // pythagoras theorem
                let a = Math.abs(lastCircle.x - (event.clientX - 55));
                let b = Math.abs(lastCircle.y - event.clientY);
                lastCircle.radius = Math.sqrt((a * a) + (b * b));
            }
        }

        const drawArrow = (event) => {
            if (event.buttons == 1 || event.buttons == 3) {
                let lastLine = art.value[art.value.length - 1];
                lastLine.x2 = event.clientX - 55;
                lastLine.y2 = event.clientY;

                // art.value.push({
                //     tool: 'polygon',
                //     points: `${event.clientX - 55},${event.clientY} `,
                // });

                if(event.buttons != 1 && event.buttons != 3) 
                {
                    console.log('down')
                }

            }
        }
        // const exportArt = () => {


        // }
        return { svgData, start, move, art, selectTool };
    }
}
</script>

<style>
.nav-items {
    display: flex;
    padding: 10px;
    list-style: none;
    transition: background-color .5s ease;
}


.nav-items li {
    border-radius: 100%;
    margin: 5px;
    height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 1.5rem;
    padding: 20px;
}

.con {
    position: relative;
    z-index: 1;
}

.data-svg {
    position: absolute;
    margin: 0;
    z-index: 2;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}

.menu {
    position: absolute;
    margin: 0;
    z-index: 3;
    top: 0;
    left: 0;
}

.artboard-pencil {
    width: 100%;
    height: 100%;
}
</style>
