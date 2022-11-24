const getMask = (key) => {
  switch(key) {
    case 'poster':
      return (
        <svg width="0" height="0" viewBox="0 0 400 319" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id={`${key}-mask`}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M399.974 149.04L400 150.846L399.988 152.653L399.938 154.459L399.851 156.263L399.729 158.066L399.571 159.867L399.379 161.665L399.154 163.459L398.896 165.249L398.608 167.034L398.29 168.815L397.944 170.59L397.57 172.361L397.17 174.125L396.745 175.883L396.297 177.636L395.827 179.383L395.336 181.123L394.827 182.858L394.299 184.587L393.756 186.31L393.197 188.028L392.626 189.742L392.042 191.45L391.447 193.155L390.843 194.855L390.231 196.553L389.612 198.248L388.987 199.941L388.358 201.632L387.724 203.323L387.088 205.014L386.45 206.706L385.811 208.399L385.171 210.095L384.531 211.793L383.891 213.495L383.252 215.202L382.613 216.913L381.974 218.63L381.336 220.353L380.698 222.083L380.06 223.82L379.421 225.565L378.78 227.317L378.136 229.077L377.489 230.845L376.837 232.622L376.18 234.406L375.516 236.199L374.845 237.999L374.164 239.807L373.473 241.622L372.77 243.444L372.055 245.273L371.325 247.107L370.578 248.946L369.815 250.789L369.033 252.635L368.23 254.484L367.406 256.334L366.559 258.184L365.687 260.033L364.789 261.88L363.863 263.723L362.909 265.56L361.925 267.391L360.91 269.213L359.862 271.025L358.78 272.826L357.665 274.613L356.513 276.384L355.326 278.139L354.101 279.874L352.838 281.589L351.537 283.281L350.197 284.948L348.819 286.589L347.4 288.202L345.942 289.785L344.445 291.336L342.908 292.853L341.332 294.336L339.716 295.781L338.063 297.188L336.371 298.555L334.642 299.88L332.877 301.163L331.076 302.402L329.24 303.597L327.37 304.745L325.469 305.847L323.536 306.901L321.573 307.907L319.581 308.864L317.563 309.773L315.519 310.632L313.451 311.442L311.361 312.203L309.25 312.915L307.12 313.578L304.973 314.192L302.81 314.759L300.632 315.278L298.442 315.751L296.241 316.179L294.031 316.562L291.813 316.901L289.589 317.199L287.361 317.456L285.129 317.674L282.896 317.854L280.662 317.998L278.428 318.108L276.197 318.186L273.969 318.234L271.745 318.253L269.526 318.245L267.314 318.213L265.107 318.159L262.908 318.085L260.717 317.992L258.533 317.884L256.359 317.761L254.193 317.626L252.035 317.482L249.887 317.329L247.748 317.17L245.617 317.006L243.494 316.84L241.379 316.672L239.272 316.505L237.172 316.338L235.078 316.174L232.99 316.014L230.908 315.857L228.829 315.705L226.755 315.559L224.683 315.419L222.614 315.285L220.545 315.158L218.478 315.038L216.41 314.925L214.341 314.82L212.27 314.722L210.196 314.632L208.119 314.55L206.037 314.475L203.95 314.408L201.857 314.347L199.757 314.294L197.649 314.246L195.533 314.204L193.408 314.167L191.273 314.135L189.128 314.106L186.972 314.08L184.804 314.055L182.625 314.032L180.433 314.009L178.228 313.984L176.011 313.958L173.78 313.928L171.536 313.893L169.279 313.852L167.007 313.804L164.723 313.747L162.425 313.681L160.114 313.602L157.79 313.511L155.453 313.405L153.105 313.284L150.744 313.145L148.373 312.987L145.991 312.809L143.599 312.608L141.199 312.385L138.79 312.137L136.375 311.862L133.953 311.56L131.526 311.229L129.096 310.867L126.662 310.474L124.227 310.048L121.792 309.588L119.358 309.093L116.927 308.561L114.499 307.992L112.077 307.386L109.66 306.74L107.252 306.056L104.852 305.333L102.461 304.57L100.082 303.767L97.7147 302.924L95.3602 302.042L93.0195 301.12L90.6935 300.159L88.3829 299.158L86.0887 298.119L83.8113 297.041L81.5517 295.926L79.3103 294.773L77.0878 293.582L74.8846 292.356L72.7014 291.093L70.5386 289.795L68.3966 288.462L66.2758 287.095L64.1768 285.694L62.0998 284.26L60.0452 282.794L58.0135 281.296L56.0051 279.766L54.0202 278.205L52.0594 276.614L50.123 274.993L48.2116 273.343L46.3257 271.664L44.4657 269.956L42.6323 268.219L40.8261 266.455L39.0479 264.663L37.2984 262.844L35.5786 260.998L33.8893 259.125L32.2317 257.225L30.6067 255.299L29.0156 253.347L27.4593 251.369L25.9389 249.365L24.4555 247.336L23.01 245.283L21.6034 243.205L20.2365 241.104L18.9103 238.979L17.6255 236.832L16.383 234.664L15.1835 232.474L14.0275 230.263L12.9158 228.033L11.8489 225.784L10.8272 223.516L9.85113 221.232L8.92114 218.93L8.03748 216.614L7.20038 214.282L6.41 211.937L5.66645 209.579L4.96977 207.209L4.31994 204.828L3.71686 202.437L3.16041 200.037L2.65039 197.629L2.18653 195.213L1.76854 192.791L1.39607 190.364L1.06873 187.931L0.78607 185.496L0.547625 183.057L0.352888 180.616L0.201326 178.174L0.0923789 175.732L0.0254682 173.29L0 170.849L0.0153698 168.41L0.070967 165.974L0.166179 163.54L0.300398 161.11L0.473021 158.685L0.68346 156.265L0.93114 153.85L1.21551 151.442L1.53603 149.04L1.89221 146.645L2.28358 144.258L2.70969 141.879L3.1701 139.508L3.66434 137.147L4.1919 134.794L4.75221 132.452L5.34472 130.12L5.9688 127.799L6.62387 125.488L7.30931 123.189L8.0245 120.902L8.76884 118.626L9.54174 116.363L10.3426 114.111L11.1709 111.873L12.0261 109.647L12.9077 107.435L13.8153 105.235L14.7483 103.05L15.7065 100.877L16.6894 98.7192L17.6968 96.5751L18.7284 94.4452L19.7839 92.3299L20.8631 90.2293L21.9659 88.1436L23.0921 86.0731L24.2417 84.018L25.4145 81.9786L26.6105 79.9552L27.8297 77.948L29.072 75.9574L30.3375 73.9836L31.6261 72.027L32.9378 70.0879L34.2727 68.1667L35.6305 66.2637L37.0114 64.3792L38.4152 62.5135L39.8417 60.6671L41.2909 58.8403L42.7625 57.0332L44.2563 55.2463L45.772 53.4797L47.3093 51.7338L48.8679 50.0089L50.4477 48.3052L52.0485 46.6231L53.6702 44.963L55.3126 43.3252L56.9757 41.7102L58.6593 40.1184L60.3635 38.5503L62.0881 37.0064L63.833 35.4871L65.5984 33.9931L67.384 32.5248L69.1898 31.0828L71.0157 29.6677L72.8616 28.28L74.7274 26.9205L76.613 25.5896L78.5182 24.288L80.4428 23.0164L82.3865 21.7752L84.3491 20.5651L86.3303 19.3867L88.3297 18.2406L90.347 17.1272L92.3817 16.0472L94.4334 15.001L96.5016 13.9892L98.5856 13.0121L100.685 12.0702L102.799 11.1639L104.927 10.2934L107.068 9.45905L109.222 8.6611L111.388 7.89972L113.565 7.17504L115.751 6.48714L117.947 5.83603L120.151 5.22168L122.363 4.64398L124.58 4.10279L126.804 3.59787L129.031 3.12895L131.262 2.69569L133.496 2.29769L135.731 1.93448L137.966 1.60555L140.201 1.31031L142.435 1.04814L144.666 0.818365L146.893 0.620354L149.117 0.453533L151.335 0.31738L153.548 0.211427L155.755 0.135255L157.955 0.0884902L160.147 0.0708008L162.332 0.0818949L164.508 0.121515L166.675 0.189437L168.833 0.285461L170.98 0.409413L173.118 0.561135L175.245 0.740488L177.361 0.94734L179.466 1.18156L181.558 1.44304L183.639 1.73164L185.707 2.04722L187.761 2.38964L189.802 2.75874L191.83 3.15433L193.842 3.5762L195.841 4.02411L197.824 4.49778L199.791 4.99689L201.742 5.52109L203.677 6.06996L205.595 6.64306L207.496 7.23985L209.379 7.85977L211.244 8.50217L213.09 9.16633L214.918 9.85148L216.727 10.5568L218.516 11.2812L220.285 12.0238L222.035 12.7835L223.764 13.559L225.473 14.349L227.161 15.1522L228.829 15.9671L230.477 16.7923L232.104 17.6265L233.711 18.4681L235.298 19.316L236.865 20.1686L238.413 21.0247L239.942 21.8831L241.452 22.7424L242.944 23.6014L244.418 24.4591L245.875 25.3143L247.315 26.1659L248.74 27.0129L250.149 27.8544L251.544 28.6895L252.924 29.5173L254.292 30.3371L255.648 31.1481L256.992 31.9498L258.325 32.7415L259.649 33.5227L260.963 34.2931L262.269 35.0521L263.569 35.7996L264.861 36.5352L266.148 37.2588L267.43 37.9702L268.709 38.6694L269.984 39.3565L271.257 40.0313L272.528 40.6942L273.799 41.3451L275.069 41.9845L276.34 42.6125L277.613 43.2294L278.888 43.8356L280.165 44.4315L281.446 45.0176L282.731 45.5943L284.02 46.1622L285.315 46.7216L286.615 47.2733L287.921 47.8178L289.233 48.3557L290.552 48.8877L291.879 49.4142L293.214 49.9361L294.556 50.454L295.907 50.9685L297.266 51.4802L298.634 51.9901L300.011 52.4987L301.398 53.007L302.793 53.5156L304.198 54.0254L305.612 54.5373L307.036 55.052L308.468 55.5704L309.909 56.0933L311.36 56.6216L312.819 57.156L314.286 57.6973L315.762 58.2463L317.246 58.8038L318.737 59.3705L320.236 59.9473L321.742 60.5347L323.255 61.1335L324.774 61.7443L326.299 62.3679L327.829 63.0049L329.365 63.6558L330.905 64.3214L332.449 65.0022L333.997 65.6987L335.548 66.4116L337.102 67.1413L338.657 67.8885L340.214 68.6537L341.771 69.4372L343.329 70.2398L344.885 71.0617L346.441 71.9036L347.993 72.7659L349.543 73.649L351.089 74.5534L352.63 75.4795L354.164 76.4278L355.692 77.3986L357.211 78.3924L358.721 79.4095L360.221 80.4503L361.709 81.515L363.184 82.6039L364.645 83.7172L366.09 84.855L367.519 86.0174L368.931 87.2045L370.324 88.4163L371.697 89.6527L373.049 90.9138L374.378 92.1993L375.684 93.5091L376.966 94.8431L378.222 96.2009L379.451 97.5823L380.653 98.987L381.826 100.415L382.969 101.865L384.081 103.337L385.161 104.831L386.209 106.346L387.224 107.881L388.204 109.437L389.148 111.011L390.057 112.605L390.929 114.217L391.763 115.846L392.559 117.491L393.317 119.153L394.035 120.829L394.714 122.521L395.352 124.225L395.95 125.943L396.507 127.672L397.023 129.412L397.498 131.163L397.931 132.923L398.322 134.691L398.672 136.467L398.981 138.25L399.248 140.038L399.474 141.832L399.659 143.63L399.804 145.431L399.909 147.234L399.974 149.04Z" fill="#FF3744"/>
          </clipPath>
        </svg>
      );

    case 'review':
      return (
        <svg width="0" height="0" viewBox="0 0 408 320" fill="none" xmlns="http://www.w3.org/2000/svg">
          <clipPath id={`${key}-mask`}>
            <path fillRule="evenodd" clipRule="evenodd" d="M382.351 199.216L382.582 201.229L382.762 203.247L382.891 205.269L382.971 207.293L383 209.319L382.979 211.345L382.909 213.372L382.789 215.398L382.62 217.422L382.404 219.443L382.139 221.461L381.828 223.474L381.47 225.483L381.067 227.485L380.618 229.482L380.126 231.471L379.591 233.452L379.013 235.425L378.394 237.389L377.734 239.343L377.034 241.288L376.295 243.222L375.518 245.145L374.704 247.057L373.852 248.956L372.965 250.844L372.042 252.719L371.085 254.581L370.095 256.43L369.07 258.264L368.014 260.085L366.925 261.892L365.805 263.684L364.653 265.46L363.472 267.222L362.26 268.967L361.019 270.697L359.749 272.41L358.45 274.107L357.123 275.787L355.768 277.449L354.385 279.094L352.976 280.721L351.539 282.329L350.076 283.919L348.586 285.489L347.07 287.04L345.529 288.572L343.962 290.082L342.37 291.573L340.753 293.042L339.111 294.489L337.445 295.915L335.755 297.318L334.04 298.698L332.303 300.055L330.542 301.388L328.758 302.698L326.952 303.983L325.125 305.243L323.275 306.477L321.405 307.686L319.514 308.87L317.603 310.027L315.673 311.158L313.724 312.262L311.757 313.339L309.773 314.389L307.771 315.412L305.753 316.408L303.72 317.377L301.673 318.318L299.611 319.232L297.536 320.119L295.449 320.979L293.351 321.813L291.241 322.619L289.122 323.4L286.993 324.154L284.855 324.883L282.71 325.586L280.558 326.265L278.399 326.918L276.235 327.547L274.065 328.152L271.889 328.732L269.709 329.288L267.525 329.819L265.337 330.326L263.145 330.809L260.95 331.267L258.752 331.7L256.551 332.107L254.347 332.49L252.142 332.847L249.935 333.179L247.727 333.484L245.517 333.763L243.307 334.016L241.096 334.242L238.886 334.442L236.676 334.614L234.468 334.759L232.26 334.876L230.055 334.966L227.852 335.029L225.653 335.064L223.456 335.071L221.264 335.05L219.076 335.002L216.894 334.927L214.717 334.825L212.547 334.696L210.383 334.541L208.226 334.36L206.078 334.153L203.937 333.922L201.806 333.666L199.683 333.388L197.57 333.087L195.467 332.764L193.374 332.422L191.291 332.059L189.218 331.679L187.156 331.282L185.105 330.869L183.064 330.441L181.033 329.999L179.013 329.544L177.002 329.077L175.001 328.599L173.01 328.111L171.028 327.613L169.054 327.107L167.088 326.594L165.131 326.073L163.18 325.546L161.236 325.014L159.299 324.476L157.367 323.933L155.44 323.386L153.518 322.834L151.599 322.28L149.684 321.721L147.771 321.16L145.86 320.595L143.951 320.027L142.042 319.456L140.134 318.883L138.226 318.306L136.316 317.725L134.405 317.142L132.493 316.555L130.578 315.963L128.66 315.368L126.739 314.768L124.814 314.163L122.885 313.553L120.952 312.937L119.014 312.315L117.071 311.687L115.123 311.051L113.169 310.407L111.21 309.755L109.245 309.094L107.275 308.422L105.299 307.741L103.319 307.047L101.333 306.342L99.3419 305.624L97.3465 304.892L95.347 304.146L93.3437 303.384L91.337 302.606L89.3275 301.812L87.3157 300.999L85.3021 300.169L83.2874 299.319L81.2723 298.45L79.2573 297.561L77.2432 296.65L75.2309 295.718L73.221 294.763L71.2143 293.785L69.2119 292.785L67.2145 291.76L65.223 290.711L63.2384 289.636L61.2617 288.537L59.2938 287.412L57.3359 286.26L55.3891 285.082L53.4544 283.877L51.533 282.645L49.6261 281.385L47.735 280.098L45.8608 278.782L44.0051 277.438L42.1691 276.066L40.3542 274.665L38.5619 273.236L36.7937 271.777L35.0512 270.29L33.3358 268.774L31.6491 267.229L29.9925 265.656L28.3677 264.054L26.776 262.424L25.2188 260.767L23.6977 259.081L22.214 257.369L20.7692 255.629L19.3644 253.864L18.0011 252.073L16.6804 250.256L15.4037 248.416L14.172 246.552L12.9865 244.664L11.8482 242.755L10.7581 240.824L9.71719 238.873L8.72632 236.902L7.7863 234.912L6.89787 232.905L6.0617 230.88L5.27838 228.84L4.54842 226.786L3.87227 224.717L3.25029 222.636L2.68274 220.543L2.16982 218.44L1.71163 216.327L1.30819 214.206L0.959426 212.078L0.665183 209.944L0.425212 207.804L0.239177 205.661L0.106653 203.514L0.0271277 201.366L0 199.216L0.0245331 197.067L0.0998043 194.918L0.224708 192.771L0.397969 190.627L0.61815 188.486L0.883673 186.349L1.19282 184.217L1.54377 182.09L1.93457 179.969L2.3632 177.854L2.82755 175.746L3.32546 173.643L3.85473 171.548L4.4131 169.459L4.99832 167.376L5.60814 165.3L6.2403 163.23L6.8926 161.165L7.56285 159.105L8.24895 157.05L8.94886 154.998L9.6606 152.949L10.3823 150.903L11.1123 148.858L11.8488 146.813L12.5904 144.767L13.3358 142.72L14.0837 140.67L14.8332 138.616L15.5832 136.557L16.3332 134.493L17.0826 132.421L17.8312 130.34L18.5788 128.251L19.3254 126.151L20.0714 124.04L20.8173 121.917L21.5637 119.781L22.3115 117.632L23.0618 115.469L23.816 113.29L24.5756 111.097L25.342 108.889L26.1172 106.666L26.903 104.427L27.7012 102.173L28.5139 99.9041L29.3433 97.6209L30.1914 95.3237L31.0604 93.0131L31.9527 90.6899L32.8704 88.355L33.8158 86.0095L34.7912 83.6544L35.7989 81.291L36.8412 78.9208L37.9202 76.5453L39.0382 74.1661L40.1973 71.7849L41.3995 69.4037L42.647 67.0243L43.9415 64.6489L45.285 62.2796L46.6791 59.9187L48.1254 57.5684L49.6255 55.2311L51.1807 52.9093L52.7923 50.6055L54.4613 48.3222L56.1888 46.062L57.9754 43.8275L59.8219 41.6213L61.7287 39.446L63.6962 37.3043L65.7246 35.1987L67.8138 33.1319L69.9637 31.1065L72.1739 29.1248L74.444 27.1894L76.7733 25.3027L79.1611 23.467L81.6063 21.6848L84.1082 19.9584L86.6654 18.29L89.2768 16.6822L91.941 15.137L94.6566 13.6568L97.4218 12.2437L100.235 10.8998L103.094 9.62698L105.998 8.42729L108.943 7.30248L111.928 6.25423L114.951 5.2841L118.008 4.39352L121.099 3.58379L124.219 2.85605L127.366 2.21129L130.537 1.65035L133.73 1.17389L136.942 0.782431L140.169 0.476308L143.409 0.25569L146.658 0.120578L149.914 0.0708008L153.174 0.106021L156.434 0.225735L159.692 0.429276L162.945 0.715821L166.189 1.08439L169.422 1.53387L172.641 2.063L175.843 2.67039L179.025 3.35452L182.186 4.11379L185.322 4.94646L188.43 5.85073L191.509 6.82472L194.557 7.86647L197.57 8.97399L200.548 10.1452L203.487 11.3781L206.388 12.6705L209.246 14.0202L212.062 15.4246L214.834 16.8815L217.56 18.3881L220.238 19.9417L222.869 21.5397L225.451 23.1791L227.984 24.8572L230.467 26.5708L232.898 28.3171L235.28 30.093L237.61 31.8956L239.89 33.7217L242.119 35.5683L244.297 37.4325L246.427 39.3113L248.507 41.2017L250.539 43.1008L252.524 45.0059L254.463 46.9142L256.358 48.823L258.209 50.7297L260.018 52.632L261.787 54.5274L263.517 56.4138L265.21 58.289L266.869 60.1511L268.494 61.9983L270.088 63.8288L271.652 65.6413L273.19 67.4343L274.702 69.2066L276.191 70.9572L277.658 72.6852L279.107 74.3899L280.538 76.0709L281.954 77.7276L283.356 79.3598L284.746 80.9675L286.127 82.5504L287.5 84.1086L288.867 85.6422L290.229 87.1513L291.588 88.6361L292.947 90.0972L294.306 91.5349L295.668 92.9498L297.033 94.3426L298.403 95.7141L299.779 97.0651L301.162 98.3967L302.554 99.7099L303.954 101.006L305.365 102.286L306.786 103.551L308.218 104.803L309.662 106.043L311.117 107.272L312.584 108.493L314.062 109.706L315.552 110.914L317.053 112.118L318.564 113.319L320.084 114.519L321.614 115.721L323.153 116.924L324.698 118.131L326.25 119.344L327.806 120.564L329.367 121.792L330.93 123.03L332.494 124.279L334.057 125.54L335.62 126.814L337.179 128.103L338.734 129.407L340.283 130.727L341.824 132.065L343.358 133.42L344.881 134.793L346.394 136.185L347.894 137.596L349.381 139.027L350.853 140.478L352.308 141.95L353.745 143.443L355.163 144.956L356.56 146.491L357.935 148.048L359.286 149.625L360.612 151.225L361.912 152.845L363.184 154.487L364.426 156.15L365.639 157.834L366.819 159.539L367.966 161.265L369.079 163.01L370.157 164.775L371.198 166.559L372.201 168.362L373.165 170.183L374.088 172.022L374.971 173.878L375.813 175.75L376.611 177.638L377.365 179.541L378.075 181.458L378.74 183.388L379.359 185.331L379.931 187.286L380.456 189.252L380.933 191.228L381.361 193.214L381.741 195.208L382.071 197.209L382.351 199.216Z"/>
          </clipPath>
        </svg>
      );
    default:


    
      console.log("mask was not selected")
  }
}

export default getMask;
