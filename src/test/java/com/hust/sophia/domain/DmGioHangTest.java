package com.hust.sophia.domain;

import org.junit.jupiter.api.Test;
import static org.assertj.core.api.Assertions.assertThat;
import com.hust.sophia.web.rest.TestUtil;

public class DmGioHangTest {

    @Test
    public void equalsVerifier() throws Exception {
        TestUtil.equalsVerifier(DmGioHang.class);
        DmGioHang dmGioHang1 = new DmGioHang();
        dmGioHang1.setId(1L);
        DmGioHang dmGioHang2 = new DmGioHang();
        dmGioHang2.setId(dmGioHang1.getId());
        assertThat(dmGioHang1).isEqualTo(dmGioHang2);
        dmGioHang2.setId(2L);
        assertThat(dmGioHang1).isNotEqualTo(dmGioHang2);
        dmGioHang1.setId(null);
        assertThat(dmGioHang1).isNotEqualTo(dmGioHang2);
    }
}
