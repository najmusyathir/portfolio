
export default function Contact(){


    const handleCopyLink = () => {
        const linkToCopy = 'google.com';
        navigator.clipboard.writeText(linkToCopy)
          .then(() => {})
          .catch((err) => {console.error('Failed to copy: ', err);});
      };

    return (
    <div>
        <div id="part1">
            <div className="div_flex_col" id="contact_p1_h1">

                <div className="div_flex_row">
                    <div className="divType1">
                        <h1>Finds me on</h1>

                        <div className="grid_container" id="my_contacts">

                            <a className="grid_item" href="https://www.instagram.com/najmusyathir">
                            <svg id='Instagram_32' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='32' height='32' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(1.17 0 0 1.17 16 16)" ><path transform=" translate(-15, -15)" d="M 9.9980469 3 C 6.1390469 3 3 6.1419531 3 10.001953 L 3 20.001953 C 3 23.860953 6.1419531 27 10.001953 27 L 20.001953 27 C 23.860953 27 27 23.858047 27 19.998047 L 27 9.9980469 C 27 6.1390469 23.858047 3 19.998047 3 L 9.9980469 3 z M 22 7 C 22.552 7 23 7.448 23 8 C 23 8.552 22.552 9 22 9 C 21.448 9 21 8.552 21 8 C 21 7.448 21.448 7 22 7 z M 15 9 C 18.309 9 21 11.691 21 15 C 21 18.309 18.309 21 15 21 C 11.691 21 9 18.309 9 15 C 9 11.691 11.691 9 15 9 z M 15 11 C 12.790861000676827 11 11 12.790861000676827 11 15 C 11 17.209138999323173 12.790861000676827 19 15 19 C 17.209138999323173 19 19 17.209138999323173 19 15 C 19 12.790861000676827 17.209138999323173 11 15 11 z" stroke-linecap="round" /></g></svg>
                                <p>Instagram</p>
                            </a>

                            <a className="grid_item" href="https://www.facebook.com/najmusyathir">
                            <svg id='Facebook_32' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='32' height='32' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(1.27 0 0 1.27 16 16)" ><path  transform=" translate(-15, -15)" d="M 24 4 L 6 4 C 4.895 4 4 4.895 4 6 L 4 24 C 4 25.105 4.895 26 6 26 L 16 26 L 16 17 L 13 17 L 13 14 L 16 14 L 16 12.389 C 16 9.339 17.486 8 20.021 8 C 21.235 8 21.877000000000002 8.09 22.181 8.131 L 22.181 11 L 20.452 11 C 19.376 11 19 11.568 19 12.718 L 19 14 L 22.154 14 L 21.726 17 L 19 17 L 19 26 L 24 26 C 25.105 26 26 25.105 26 24 L 26 6 C 26 4.895 25.104 4 24 4 z" stroke-linecap="round" /></g></svg>
                                Facebook
                            </a>

                            <a className="grid_item" href="https://github.com/najmusyathir">
                            <svg id='GitHub_32' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='32' height='32' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(1.17 0 0 1.17 16 16)" ><path transform=" translate(-15, -14.82)" d="M 15 3 C 8.373 3 3 8.373 3 15 C 3 20.623 6.872 25.328 12.092 26.630000000000003 C 12.036 26.468 12 26.28 12 26.047 L 12 23.996000000000002 C 11.513 23.996000000000002 10.697 23.996000000000002 10.492 23.996000000000002 C 9.671000000000001 23.996000000000002 8.941 23.643 8.587000000000002 22.987000000000002 C 8.194 22.258000000000003 8.126000000000001 21.143 7.152000000000001 20.461000000000002 C 6.863000000000001 20.234 7.083000000000001 19.975 7.416000000000001 20.01 C 8.031 20.184 8.541 20.606 9.021 21.232000000000003 C 9.499 21.859 9.724 22.001 10.617 22.001 C 11.05 22.001 11.698 21.976000000000003 12.308000000000002 21.880000000000003 C 12.636000000000001 21.047000000000004 13.203000000000001 20.28 13.896 19.918000000000003 C 9.9 19.507 7.993000000000001 17.519000000000002 7.993000000000001 14.820000000000004 C 7.993000000000001 13.658000000000005 8.488000000000001 12.534000000000004 9.329 11.587000000000003 C 9.053 10.647 8.706 8.73 9.435 8 C 11.233 8 12.32 9.166 12.581 9.481 C 13.477 9.174 14.461 9 15.495 9 C 16.531 9 17.519 9.174 18.416999999999998 9.483 C 18.675 9.17 19.763 8 21.565 8 C 22.297 8.731 21.946 10.656 21.667 11.594 C 22.503 12.539 22.995 13.66 22.995 14.82 C 22.995 17.517 21.091 19.504 17.101 19.917 C 18.199 20.49 19 22.1 19 23.313 L 19 26.046999999999997 C 19 26.150999999999996 18.977 26.225999999999996 18.965 26.314999999999998 C 23.641 24.676 27 20.236 27 15 C 27 8.373 21.627 3 15 3 z" stroke-linecap="round" /></g></svg>
                                <p>GitHub</p>
                            </a>

                            <a className="grid_item" href="https://www.linkedin.com/in/najmusyathir/">
                            <svg id='LinkedIn_32' width='32' height='32' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg' xmlnsXlink='http://www.w3.org/1999/xlink'><rect width='32' height='32' stroke='none' fill='#000000' opacity='0'/><g transform="matrix(1.56 0 0 1.56 16 16)" ><path transform=" translate(-12, -12)" d="M 19 3 L 5 3 C 3.895 3 3 3.895 3 5 L 3 19 C 3 20.105 3.895 21 5 21 L 19 21 C 20.105 21 21 20.105 21 19 L 21 5 C 21 3.895 20.105 3 19 3 z M 9 17 L 6.477 17 L 6.477 10 L 9 10 L 9 17 z M 7.694 8.717 C 6.923 8.717 6.4079999999999995 8.203000000000001 6.4079999999999995 7.517 C 6.4079999999999995 6.8309999999999995 6.922 6.317 7.779 6.317 C 8.55 6.317 9.065 6.831 9.065 7.517 C 9.065 8.203 8.551 8.717 7.694 8.717 z M 18 17 L 15.558 17 L 15.558 13.174 C 15.558 12.116 14.907 11.872 14.663 11.872 C 14.419 11.872 13.605 12.035 13.605 13.174 C 13.605 13.337 13.605 17 13.605 17 L 11.082 17 L 11.082 10 L 13.605 10 L 13.605 10.977 C 13.93 10.407 14.581 10 15.802 10 C 17.023 10 18 10.977 18 13.174 L 18 17 z" stroke-linecap="round" /></g></svg>
                                <p>LinkedIn</p>
                            </a>
                        
                        </div>
                        
                    </div>

                    <div className="divType1" id="myQR">
                        <img src="../src/assets/QR_github.io.png" alt="QR Code" />
                        <p onClick={handleCopyLink}>Click here to copy link</p>

                    </div>

                </div>

            </div>

        </div>

        <div className='part2'>
        

        </div>
        
    </div>

    );
}