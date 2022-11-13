import './Poster.sass';


const Poster = ({ poster }) => {
  const { title, image, startTime, price, address, id } = poster;
  return(
    <li className='poster' key={id}>
      <div className='poster__image-container'>
         <img src={image} alt="title" className="poster__image" />
      </div>
      <h3 className='poster__title'>{title}</h3>
      <h5 className='poster__subtitle'>Начало:</h5>
      <span className='poster__span'>{startTime}</span>
      <h5 className='poster__subtitle'>Цена билета:</h5>
      <span className='poster__span_red'>{`${price}р`}</span>
      <h5 className='poster__subtitle'>Адрес проведения:</h5>
      <address className='poster__span'>{address}</address>

      <svg className='poster__mask' width="0" height="0" viewBox="0 0 408 320" fill="none" xmlns="http://www.w3.org/2000/svg">
        <clipPath id='poster-mask'>
          <path fillRule="evenodd" clipRule="evenodd" d="M382.351 199.216L382.582 201.229L382.762 203.247L382.891 205.269L382.971 207.293L383 209.319L382.979 211.345L382.909 213.372L382.789 215.398L382.62 217.422L382.404 219.443L382.139 221.461L381.828 223.474L381.47 225.483L381.067 227.485L380.618 229.482L380.126 231.471L379.591 233.452L379.013 235.425L378.394 237.389L377.734 239.343L377.034 241.288L376.295 243.222L375.518 245.145L374.704 247.057L373.852 248.956L372.965 250.844L372.042 252.719L371.085 254.581L370.095 256.43L369.07 258.264L368.014 260.085L366.925 261.892L365.805 263.684L364.653 265.46L363.472 267.222L362.26 268.967L361.019 270.697L359.749 272.41L358.45 274.107L357.123 275.787L355.768 277.449L354.385 279.094L352.976 280.721L351.539 282.329L350.076 283.919L348.586 285.489L347.07 287.04L345.529 288.572L343.962 290.082L342.37 291.573L340.753 293.042L339.111 294.489L337.445 295.915L335.755 297.318L334.04 298.698L332.303 300.055L330.542 301.388L328.758 302.698L326.952 303.983L325.125 305.243L323.275 306.477L321.405 307.686L319.514 308.87L317.603 310.027L315.673 311.158L313.724 312.262L311.757 313.339L309.773 314.389L307.771 315.412L305.753 316.408L303.72 317.377L301.673 318.318L299.611 319.232L297.536 320.119L295.449 320.979L293.351 321.813L291.241 322.619L289.122 323.4L286.993 324.154L284.855 324.883L282.71 325.586L280.558 326.265L278.399 326.918L276.235 327.547L274.065 328.152L271.889 328.732L269.709 329.288L267.525 329.819L265.337 330.326L263.145 330.809L260.95 331.267L258.752 331.7L256.551 332.107L254.347 332.49L252.142 332.847L249.935 333.179L247.727 333.484L245.517 333.763L243.307 334.016L241.096 334.242L238.886 334.442L236.676 334.614L234.468 334.759L232.26 334.876L230.055 334.966L227.852 335.029L225.653 335.064L223.456 335.071L221.264 335.05L219.076 335.002L216.894 334.927L214.717 334.825L212.547 334.696L210.383 334.541L208.226 334.36L206.078 334.153L203.937 333.922L201.806 333.666L199.683 333.388L197.57 333.087L195.467 332.764L193.374 332.422L191.291 332.059L189.218 331.679L187.156 331.282L185.105 330.869L183.064 330.441L181.033 329.999L179.013 329.544L177.002 329.077L175.001 328.599L173.01 328.111L171.028 327.613L169.054 327.107L167.088 326.594L165.131 326.073L163.18 325.546L161.236 325.014L159.299 324.476L157.367 323.933L155.44 323.386L153.518 322.834L151.599 322.28L149.684 321.721L147.771 321.16L145.86 320.595L143.951 320.027L142.042 319.456L140.134 318.883L138.226 318.306L136.316 317.725L134.405 317.142L132.493 316.555L130.578 315.963L128.66 315.368L126.739 314.768L124.814 314.163L122.885 313.553L120.952 312.937L119.014 312.315L117.071 311.687L115.123 311.051L113.169 310.407L111.21 309.755L109.245 309.094L107.275 308.422L105.299 307.741L103.319 307.047L101.333 306.342L99.3419 305.624L97.3465 304.892L95.347 304.146L93.3437 303.384L91.337 302.606L89.3275 301.812L87.3157 300.999L85.3021 300.169L83.2874 299.319L81.2723 298.45L79.2573 297.561L77.2432 296.65L75.2309 295.718L73.221 294.763L71.2143 293.785L69.2119 292.785L67.2145 291.76L65.223 290.711L63.2384 289.636L61.2617 288.537L59.2938 287.412L57.3359 286.26L55.3891 285.082L53.4544 283.877L51.533 282.645L49.6261 281.385L47.735 280.098L45.8608 278.782L44.0051 277.438L42.1691 276.066L40.3542 274.665L38.5619 273.236L36.7937 271.777L35.0512 270.29L33.3358 268.774L31.6491 267.229L29.9925 265.656L28.3677 264.054L26.776 262.424L25.2188 260.767L23.6977 259.081L22.214 257.369L20.7692 255.629L19.3644 253.864L18.0011 252.073L16.6804 250.256L15.4037 248.416L14.172 246.552L12.9865 244.664L11.8482 242.755L10.7581 240.824L9.71719 238.873L8.72632 236.902L7.7863 234.912L6.89787 232.905L6.0617 230.88L5.27838 228.84L4.54842 226.786L3.87227 224.717L3.25029 222.636L2.68274 220.543L2.16982 218.44L1.71163 216.327L1.30819 214.206L0.959426 212.078L0.665183 209.944L0.425212 207.804L0.239177 205.661L0.106653 203.514L0.0271277 201.366L0 199.216L0.0245331 197.067L0.0998043 194.918L0.224708 192.771L0.397969 190.627L0.61815 188.486L0.883673 186.349L1.19282 184.217L1.54377 182.09L1.93457 179.969L2.3632 177.854L2.82755 175.746L3.32546 173.643L3.85473 171.548L4.4131 169.459L4.99832 167.376L5.60814 165.3L6.2403 163.23L6.8926 161.165L7.56285 159.105L8.24895 157.05L8.94886 154.998L9.6606 152.949L10.3823 150.903L11.1123 148.858L11.8488 146.813L12.5904 144.767L13.3358 142.72L14.0837 140.67L14.8332 138.616L15.5832 136.557L16.3332 134.493L17.0826 132.421L17.8312 130.34L18.5788 128.251L19.3254 126.151L20.0714 124.04L20.8173 121.917L21.5637 119.781L22.3115 117.632L23.0618 115.469L23.816 113.29L24.5756 111.097L25.342 108.889L26.1172 106.666L26.903 104.427L27.7012 102.173L28.5139 99.9041L29.3433 97.6209L30.1914 95.3237L31.0604 93.0131L31.9527 90.6899L32.8704 88.355L33.8158 86.0095L34.7912 83.6544L35.7989 81.291L36.8412 78.9208L37.9202 76.5453L39.0382 74.1661L40.1973 71.7849L41.3995 69.4037L42.647 67.0243L43.9415 64.6489L45.285 62.2796L46.6791 59.9187L48.1254 57.5684L49.6255 55.2311L51.1807 52.9093L52.7923 50.6055L54.4613 48.3222L56.1888 46.062L57.9754 43.8275L59.8219 41.6213L61.7287 39.446L63.6962 37.3043L65.7246 35.1987L67.8138 33.1319L69.9637 31.1065L72.1739 29.1248L74.444 27.1894L76.7733 25.3027L79.1611 23.467L81.6063 21.6848L84.1082 19.9584L86.6654 18.29L89.2768 16.6822L91.941 15.137L94.6566 13.6568L97.4218 12.2437L100.235 10.8998L103.094 9.62698L105.998 8.42729L108.943 7.30248L111.928 6.25423L114.951 5.2841L118.008 4.39352L121.099 3.58379L124.219 2.85605L127.366 2.21129L130.537 1.65035L133.73 1.17389L136.942 0.782431L140.169 0.476308L143.409 0.25569L146.658 0.120578L149.914 0.0708008L153.174 0.106021L156.434 0.225735L159.692 0.429276L162.945 0.715821L166.189 1.08439L169.422 1.53387L172.641 2.063L175.843 2.67039L179.025 3.35452L182.186 4.11379L185.322 4.94646L188.43 5.85073L191.509 6.82472L194.557 7.86647L197.57 8.97399L200.548 10.1452L203.487 11.3781L206.388 12.6705L209.246 14.0202L212.062 15.4246L214.834 16.8815L217.56 18.3881L220.238 19.9417L222.869 21.5397L225.451 23.1791L227.984 24.8572L230.467 26.5708L232.898 28.3171L235.28 30.093L237.61 31.8956L239.89 33.7217L242.119 35.5683L244.297 37.4325L246.427 39.3113L248.507 41.2017L250.539 43.1008L252.524 45.0059L254.463 46.9142L256.358 48.823L258.209 50.7297L260.018 52.632L261.787 54.5274L263.517 56.4138L265.21 58.289L266.869 60.1511L268.494 61.9983L270.088 63.8288L271.652 65.6413L273.19 67.4343L274.702 69.2066L276.191 70.9572L277.658 72.6852L279.107 74.3899L280.538 76.0709L281.954 77.7276L283.356 79.3598L284.746 80.9675L286.127 82.5504L287.5 84.1086L288.867 85.6422L290.229 87.1513L291.588 88.6361L292.947 90.0972L294.306 91.5349L295.668 92.9498L297.033 94.3426L298.403 95.7141L299.779 97.0651L301.162 98.3967L302.554 99.7099L303.954 101.006L305.365 102.286L306.786 103.551L308.218 104.803L309.662 106.043L311.117 107.272L312.584 108.493L314.062 109.706L315.552 110.914L317.053 112.118L318.564 113.319L320.084 114.519L321.614 115.721L323.153 116.924L324.698 118.131L326.25 119.344L327.806 120.564L329.367 121.792L330.93 123.03L332.494 124.279L334.057 125.54L335.62 126.814L337.179 128.103L338.734 129.407L340.283 130.727L341.824 132.065L343.358 133.42L344.881 134.793L346.394 136.185L347.894 137.596L349.381 139.027L350.853 140.478L352.308 141.95L353.745 143.443L355.163 144.956L356.56 146.491L357.935 148.048L359.286 149.625L360.612 151.225L361.912 152.845L363.184 154.487L364.426 156.15L365.639 157.834L366.819 159.539L367.966 161.265L369.079 163.01L370.157 164.775L371.198 166.559L372.201 168.362L373.165 170.183L374.088 172.022L374.971 173.878L375.813 175.75L376.611 177.638L377.365 179.541L378.075 181.458L378.74 183.388L379.359 185.331L379.931 187.286L380.456 189.252L380.933 191.228L381.361 193.214L381.741 195.208L382.071 197.209L382.351 199.216Z"/>
        </clipPath>
      </svg>
    </li>
  )
}

export default Poster;
