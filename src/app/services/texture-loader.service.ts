import { Injectable } from '@angular/core';
import * as THREE from 'three';

@Injectable({
  providedIn: 'root',
})
export class TextureLoaderService {
  private texture?: THREE.Texture;
  private textureLoaded = false;

  loadTexture(): Promise<THREE.Texture> {
    if (this.textureLoaded && this.texture) {
      return Promise.resolve(this.texture);
    }

    return new Promise((resolve, reject) => {
      const loader = new THREE.TextureLoader();
      loader.load(
        'assets/earth_texture.jpg',
        (tex) => {
          this.texture = tex;
          this.textureLoaded = true;
          resolve(tex);
        },
        undefined,
        (err) => reject(err)
      );
    });
  }
}
