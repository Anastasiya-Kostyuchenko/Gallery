class Gallery {
  constructor({
    images,
    el,
    interval,
    onChange,
    arrows,
    dots,
    infinite,
    nextImgByClick,
  }) {
    this.gallery = document.querySelector(el);
    this.images = images;
    this.onChange = onChange;
    this._count = 0;
    this.arrows = arrows;
    this.interval = interval;
    this.infinite = infinite;
    this.gallery.innerHTML = `
    <div class="btn">
      <button class="btnPrev" hidden></button>
    </div>
    <div class="photobox">
      <img class="img" src="" alt="photo">
    </div>
    <div class="btn" >
      <button class="btnNext" hidden></button>
    </div>
    <div class="dotsUl"></div>
`;
    this.btnPrev = this.gallery.querySelector(".btnPrev");
    this.btnNext = this.gallery.querySelector(".btnNext");
    this.img = this.gallery.querySelector(".img");
    this.photoBox = this.gallery.querySelector(".photobox");
    this.dotsUl = this.gallery.querySelector(".dotsUl");
    this.render();
    this.setup(dots, arrows, nextImgByClick, interval);
  }

  get count() {
    return this._count;
  }

  set count(value) {
    this.dotsUl.children[this._count]?.classList.remove("active");
    if (this.infinite) {
      this._count =
        value < 0 ? this.images.length - 1 : value % this.images.length;
      this.restartInterval();
    } else if (this.interval) {
      value === this.images.length - 1
        ? clearInterval(this.intervalId)
        : this.restartInterval();
      this._count = value;
    }
    if (!this.infinite) {
      this.btnPrev.disabled = this.count === 0;
      this.btnNext.disabled = this.count === this.images.length - 1;
    }
    this.onChange?.(this._count);
    this.img.src = this.images[this.count];
    this.dotsUl.children[this._count]?.classList.add("active");
  }

  render() {
    const {
      photoBox,
      btnPrev: btnPrev,
      btnNext: btnNext,
      gallery,
      img,
      dotsUl,
    } = this;
    photoBox.className = "photoBox";
    btnPrev.className = "prev";
    this.btnNext.className = "next";
    gallery.append(photoBox);
    photoBox.append(btnPrev);
    photoBox.append(img);
    photoBox.append(this.btnNext);
    gallery.append(dotsUl);
  }

  renderDots() {
    this.images.forEach((_, index) => {
      const li = document.createElement("li");
      index === this.count && li.classList.add("active");
      this.dotsUl.append(li);
      li.onclick = () => (this.count = index);
    });
  }

  setup(dots, arrows, nextImgByClick) {
    dots && this.renderDots();

    if (arrows) {
      this.btnPrev.hidden = false;
      this.btnNext.hidden = false;
      this.btnPrev.onclick = () => this.count--;
      this.btnNext.onclick = () => this.count++;
    }

    nextImgByClick &&
      (this.img.onclick = () => {
        if (this.count === this.images.length - 1) return;
        this.count++;
      });

    this.count = 0;
  }

  restartInterval() {
    if (!this.interval) return;
    clearInterval(this.intervalId);
    this.intervalId = setInterval(() => {
      this.count++;
    }, this.interval);
  }
}

function createGallery(options) {
  new Gallery(options);
}

export { createGallery };
