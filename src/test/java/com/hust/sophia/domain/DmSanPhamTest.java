package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmSanPhamTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmSanPham.class);
        DmSanPham dmSanPham1 = new DmSanPham();
        dmSanPham1.setId(1L);
        DmSanPham dmSanPham2 = new DmSanPham();
        dmSanPham2.setId(dmSanPham1.getId());
        assertThat(dmSanPham1).isEqualTo(dmSanPham2);
        dmSanPham2.setId(2L);
        assertThat(dmSanPham1).isNotEqualTo(dmSanPham2);
        dmSanPham1.setId(null);
        assertThat(dmSanPham1).isNotEqualTo(dmSanPham2);
    }
}
