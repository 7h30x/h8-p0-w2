function bandingkanAngka(angka1, angka2) {
  if (angka1>angka2) {
      return true;
  }
  else if (angka2>angka1) {
      return false;
  }
  else {
      return -1;
  }
}

bandingkanAngka(0,9)
